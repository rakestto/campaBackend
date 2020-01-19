const BaseService = require('./Base.service');

class InteresService extends BaseService {
  constructor({ InteresBussines }) {
    super(InteresBussines);
  }

  async deleteConVehiculo(vehiculoId) {
    const deletedEntity = await this.EntityBussines.deleteConVehiculo(vehiculoId);
    return deletedEntity;
  }

}

module.exports = InteresService;
