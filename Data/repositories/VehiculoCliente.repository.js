const BaseRepository = require('./Base.repository');

class VehiculoClienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'VehiculoCliente');
  }
}

module.exports = VehiculoClienteRepository;
