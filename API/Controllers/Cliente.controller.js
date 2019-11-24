class ClienteController {
  constructor({ ClienteService }) {
    this.clienteService = ClienteService;
  }

  async getClientes(req, res) {
    const clientes = await this.clienteService.getAll();
    return res.send({
      data: clientes
    });
  }

  async getCliente(req, res) {
    const { id } = req.params;
    const clientes = await this.clienteService.get(id);
    return clientes ? res.send({ data: clientes }) : res.sendStatus(404);
  }

  async createCliente(req, res) {
    const { body } = req;
    const clienteCreado = await this.clienteService.create(body);
    if (!clienteCreado) {
      return res.sendStatus(404);
    }
    return res.send({
      data: clienteCreado
    });
  }

  async updateCliente(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedcliente = await this.clienteService.update(id, body);
    if (!updatedcliente) {
      return res.sendStatus(404);
    }
    return res.send({
      data: updatedcliente
    });
  }

  async deleteCliente(req, res) {
    const { id } = req.params;
    const deletedcliente = await this.clienteService.delete(id);
    if (!deletedcliente) {
      return res.sendStatus(404);
    }
    return res.send({
      data: deletedcliente
    });
  }
}

module.exports = ClienteController;
