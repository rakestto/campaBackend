const BaseRepository = require('./Base.repository');

class VehiculoClienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'VehiculoClienteRepository');
  }
}

module.exports = VehiculoClienteRepository;
