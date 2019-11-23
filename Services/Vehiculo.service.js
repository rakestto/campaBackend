const BaseService = require('./Base.service');

class VehiculoService extends BaseService {
  constructor({ VehiculoBussines }) {
    this.VehiculoBussines = VehiculoBussines;
  }
}

module.exports = VehiculoService;
