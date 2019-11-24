const BaseBussines = require('./Base.bussines');

class ClienteBussines extends BaseBussines {
  constructor({ ClienteRepository }) {
    super(ClienteRepository);
  }
}

module.exports = ClienteBussines;
