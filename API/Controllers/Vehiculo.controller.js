class VehiculoController {
  constructor({ VehiculoService }) {
    this.VehiculoService = VehiculoService;
  }

  async getVehiculos(req, res) {
    const vehiculos = await this.VehiculoService.getAll();
    if (!vehiculos) {
      return res.sendStatus(404);
    }
    return res.send({
      data: vehiculos
    });
  }

  async getVehiculo(req, res) {
    const { id } = req.params;
    const vehiculo = await this.VehiculoService.get(id);
    if (!vehiculo) {
      return res.sendStatus(404);
    } else {
      return res.send({
        data: vehiculo
      });
    }
  }

  async createVehiculo(req, res) {
    const { body } = req;
    console.log(body);
    const vehiculoCreado = await this.VehiculoService.create(body);
    if (!vehiculoCreado) {
      return res.sendStatus(404);
    }
    return res.send({
      data: vehiculoCreado
    });
  }
  async updateVehiculo(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedVehiculo = await this.VehiculoService.update(id, body);
    if (!updatedVehiculo) {
      return res.sendStatus(404);
    }
    return res.send({
      data: updatedVehiculo
    });
  }

  async deleteVehiculo(req, res) {
    const { id } = req.params;
    const deletedVehiculo = await this.VehiculoService.delete(id);
    if (!deletedVehiculo) return null;
    return res.send({
      data: deletedVehiculo
    });
  }
}

module.exports = VehiculoController;
