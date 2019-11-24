const BaseService = require('./Base.service');

class VehiculoClienteService extends BaseService {
  constructor({ VehiculoClienteBussines }) {
    super(VehiculoClienteBussines);
  }
}

module.exports = VehiculoClienteService;
