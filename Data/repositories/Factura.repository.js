const BaseRepository = require('../repositories/Base.repository');

class FacturaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Factura');
  }

  getFacturasCliente(clienteId) {
    return this.db.Factura.findAll({
      where: {
        clienteId
      }
    });
  }
}

module.exports = FacturaRepository;
