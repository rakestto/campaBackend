const BaseService = require('./Base.service');

class ClienteService extends BaseService {
  constructor({ ClienteBussines }) {
    super(ClienteBussines);
  }
}

module.exports = ClienteService;
