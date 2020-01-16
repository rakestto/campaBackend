const BaseRepository = require('./Base.repository');

class ClienteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'Cliente');
    this.db = db
  }


  getAll() {
    return this.db[this.entity].findAll();
  }

  get(email) {
    return this.db[this.entity].findOne({ where: { email } });
  }

  create(entity) {
    console.log({ entity });
    const created = this.db[this.entity].create(entity);
    return created;
  }

  update(email, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this.db[this.entity].update(entity, { where: { email } });
  }

  delete(email) {
    return this.db[this.entity].destroy({ where: { email } });
  }

  getClienteEmail(email) {
    const cliente = this.db.Cliente.findOne({ where: { email } })
    return cliente
  }
}

module.exports = ClienteRepository;
