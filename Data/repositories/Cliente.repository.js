const BaseRepository = require('./Base.repository');

class ClienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Cliente');
  }
}

module.exports = ClienteRepository;
