const BaseService = require("./Base.service");

class VehiculoService extends BaseService {
  constructor({ VehiculoBussines, ImagenesBussines }) {
    super(VehiculoBussines);
    this.VehiculoBussines = VehiculoBussines;
    this.ImagenesBussines = ImagenesBussines;
  }

  async createVehiculo(body, imagen, req) {
    body.imagen = imagen;
    console.log(body.imagen);
    const vehiculo = await this.VehiculoBussines.createVehiculo(body);
    const galeria = await this.ImagenesBussines.createGalery(
      req.files,
      vehiculo.id
    );
    return { vehiculo, galeria };
  }
}

module.exports = VehiculoService;
