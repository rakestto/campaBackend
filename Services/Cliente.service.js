const BaseService = require('./Base.service');

class ClienteService extends BaseService {
  constructor({ ClienteBussines }) {
    super(ClienteBussines);
    this.ClienteBussines = ClienteBussines
  }

  async getClienteEmail(email) {
    const cliente = this.ClienteBussines.getClienteEmail(email)
    return cliente
  }
}

module.exports = ClienteService;
