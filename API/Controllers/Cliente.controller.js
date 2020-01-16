class ClienteController {
  constructor({ ClienteService }) {
    this.clienteService = ClienteService;
  }

  async getClientes(req, res) {
    const clientes = await this.clienteService.getAll();
    return res.send({
      clientes
    });
  }

  async getClienteEmail(req, res) {
    const { email } = req.query
    const cliente = await this.clienteService.getClienteEmail(email)
    return res.send({ cliente })
  }

  async getCliente(req, res) {
    const { email } = req.params;
    const clientes = await this.clienteService.get(email);
    return clientes ? res.send({ clientes }) : res.sendStatus(404);
  }

  async createCliente(req, res) {
    const { body } = req;
    const clienteCreado = await this.clienteService.create(body);
    if (!clienteCreado) {
      return res.sendStatus(404);
    }
    return res.send({
      clienteCreado
    });
  }

  async updateCliente(req, res) {
    const { body } = req;
    const { email } = req.params;
    const updatedcliente = await this.clienteService.update(email, body);
    if (!updatedcliente) {
      return res.sendStatus(404);
    }
    return res.send({
      updatedcliente
    });
  }

  async deleteCliente(req, res) {
    const { email } = req.params;
    const deletedcliente = await this.clienteService.delete(email);
    if (!deletedcliente) {
      return res.sendStatus(404);
    }
    return res.send({
      deletedcliente
    });
  }
}

module.exports = ClienteController;
