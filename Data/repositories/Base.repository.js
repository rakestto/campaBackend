class BaseRepository {
  constructor(entity, db) {
    this.entity = entity;
    this.db = db;
  }

  getAll() {
    return this.db[this.Entity].findAll();
  }

  get(id) {
    return this.db[this.Entity].findOne({ where: { id } });
  }

  create(entity) {
    return this._db[this.entity].create(entity);
  }

  update(id, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this._db[this.entity].update(entity, { where: { id } });
  }

  delete(id) {
    return this._db[this.entity].destroy({ where: { id } });
  }
}

module.exports = BaseRepository;
