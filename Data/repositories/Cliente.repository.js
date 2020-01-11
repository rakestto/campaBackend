const BaseRepository = require('./Base.repository');

class ClienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Cliente');
    this.db = db
  }

  getClienteEmail(email) {
    const cliente = this.db.Cliente.findOne({ where: { email } })
    return cliente
  }
}

module.exports = ClienteRepository;
