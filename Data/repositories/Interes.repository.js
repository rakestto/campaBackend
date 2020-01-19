const BaseRepository = require('./Base.repository');

class InteresRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Interes');
    this.db = db;
    this.entity = 'Interes'
  }

  deleteConVehiculo(vehiculoId) {
    return this.db[this.entity].destroy({ where: { vehiculoId } });
  }
}

module.exports = InteresRepository;
