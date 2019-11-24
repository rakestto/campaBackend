const BaseService = require('./Base.service');

class FacturaService extends BaseService {
  constructor({ FacturaBussines }) {
    super(FacturaBussines);
  }
}

module.exports = FacturaService;
