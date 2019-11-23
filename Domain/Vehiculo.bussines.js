const BaseBussines = require('./Base.bussines');

class VehiculoBussines extends BaseBussines {
  constructor({ VehiculoRepository }) {
    super(VehiculoRepository);
  }
}
module.exports = VehiculoBussines;
