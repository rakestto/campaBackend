const BaseRepository = require('./Base.repository');

class VehiculoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Vehiculo');
  }
}

module.exports = VehiculoRepository;
