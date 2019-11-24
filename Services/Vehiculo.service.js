const BaseService = require('./Base.service');

class VehiculoService extends BaseService {
  constructor({ VehiculoBussines }) {
    super(VehiculoBussines);
  }
}

module.exports = VehiculoService;
