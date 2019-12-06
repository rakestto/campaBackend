const BaseBussines = require("./Base.bussines");

class VehiculoBussines extends BaseBussines {
  constructor({ VehiculoRepository, ImagenesRepository }) {
    super(VehiculoRepository);
    this.VehiculoRepository = VehiculoRepository;
    this.ImagenesRepository = ImagenesRepository;
  }

  async getVehiculoFiltrado(body) {
    const vehiculos = await this.VehiculoRepository.getVehiculoFiltrado(body);
    return vehiculos ? vehiculos : null;
  }

  async getVehiculoConImagenes(idVehiculo) {
    const vehiculo = await this.VehiculoRepository.get(idVehiculo);
    const imagenes = await this.ImagenesRepository.getImagenesVehiculo(
      idVehiculo
    );
    return { vehiculo, imagenes };
  }

  async createVehiculo(vehiculo) {
    const vehiculoNuevo = await this.VehiculoRepository.createVehiculo(
      vehiculo
    );
    return vehiculoNuevo ? vehiculoNuevo : null;
  }
}
module.exports = VehiculoBussines;
