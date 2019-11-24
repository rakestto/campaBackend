class VehiculoClienteController {
  constructor({ VehiculoClienteService }) {
    this.VehiculoClienteService = VehiculoClienteService;
  }

  async getVehiculoCliente(req, res) {
    const vehiculoCliente = await this.VehiculoClienteService.getAll();
    return vehiculoCliente
      ? res.send({ data: vehiculoCliente })
      : res.sendStatus(404);
  }

  async getVehiculoCliente(req, res) {
    const { id } = req.params;
    const vehiculoCliente = await this.VehiculoClienteService.get(id);
    return vehiculoCliente
      ? res.send({ data: vehiculoCliente })
      : res.sendStatus(404);
  }

  async createVehiculoCliente(req, res) {
    const { body } = req;
    const vehiculoCliente = await this.VehiculoClienteService.create(body);
    vehiculoCliente ? res.send({ data: vehiculoCliente }) : res.sendStatus(404);
  }

  async updateVehiculoCliente(req, res) {
    const { id } = req.params;
    const { body } = req;
    const updateVehiculoCliente = await this.VehiculoClienteService.update(
      id,
      body
    );
    updateVehiculoCliente
      ? res.send({ data: updateVehiculoCliente })
      : res.sendStatus(404);
  }

  async deleteVehiculoCliente(req, res) {
    const { id } = req.params;
    const deleteVehiculoCliente = await this.VehiculoClienteService.delete(id);
    deleteVehiculoCliente
      ? res.send({ data: deleteVehiculoCliente })
      : res.sendStatus(404);
  }
}
module.exports = VehiculoClienteController;
