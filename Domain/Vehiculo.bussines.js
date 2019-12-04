const BaseBussines = require("./Base.bussines");

class VehiculoBussines extends BaseBussines {
  constructor({ VehiculoRepository }) {
    super(VehiculoRepository);
    this.VehiculoRepository = VehiculoRepository;
  }

  async createVehiculo(vehiculo) {
    const vehiculoNuevo = await this.VehiculoRepository.createVehiculo(
      vehiculo
    );
    return vehiculoNuevo ? vehiculoNuevo : null;
  }
}
module.exports = VehiculoBussines;
