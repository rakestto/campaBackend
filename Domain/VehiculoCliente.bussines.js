const BaseBussines = require('./Base.bussines');

class VehiculoClienteBussines extends BaseBussines {
  constructor({ VehiculoClienteRepository }) {
    super(VehiculoClienteRepository);
  }
}

module.exports = VehiculoClienteBussines;
