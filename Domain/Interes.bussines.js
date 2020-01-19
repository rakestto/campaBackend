const BaseBussines = require('./Base.bussines');

class InteresBussines extends BaseBussines {
  constructor({ InteresRepository }) {
    super(InteresRepository);
  }

  async deleteConVehiculo(vehiculoId) {
    return await this.EntityRepository.deleteConVehiculo(vehiculoId);
  }
}

module.exports = InteresBussines;
