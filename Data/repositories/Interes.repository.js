const BaseRepository = require('./Base.repository');

class InteresRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Interes');
  }
}

module.exports = InteresRepository;
