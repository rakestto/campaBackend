const BaseBussines = require('../Domain/Base.bussines');

class FacturaBussines extends BaseBussines {
  constructor({ FacturaRepository }) {
    super(FacturaRepository);
  }
}

module.exports = FacturaBussines;
