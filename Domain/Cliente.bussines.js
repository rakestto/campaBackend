const BaseBussines = require('./Base.bussines');

class ClienteBussines extends BaseBussines {
  constructor({ ClienteRepository }) {
    super(ClienteRepository);
    this.ClienteRepository = ClienteRepository
  }
  async getClienteEmail(email) {
    const cliente = this.ClienteRepository.getClienteEmail(email)
    return cliente
  }
}

module.exports = ClienteBussines;
