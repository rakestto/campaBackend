class VehiculoController {
  constructor({ VehiculoService }) {
    this.VehiculoService = VehiculoService;
  }

  async getVehiculos(req, res) {
    const vehiculos = await this.VehiculoService.getAll();
    if (!vehiculos) return null;
    return res.send({
      payload: vehiculos
    });
  }

  async getVehiculo(req, res) {
    const { id } = req.params;
    const vehiculo = await this.VehiculoService.get(id);
    if (!vehiculo) return null;
    return res.send({
      payload: vehiculo
    });
  }

  async createVehiculo(req, res) {
    const { body } = req;
    // console.log(body);
    const vehiculoCreado = await this.VehiculoService.create(body);
    if (!vehiculoCreado) return null;
    return res.send({
      payload: vehiculoCreado
    });
  }
}

module.exports = VehiculoController;
