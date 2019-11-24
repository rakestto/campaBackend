const BaseRepository = require('../repositories/Base.repository');

class FacturaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Factura');
  }
}

module.exports = FacturaRepository;
