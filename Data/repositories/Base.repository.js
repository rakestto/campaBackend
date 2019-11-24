class BaseRepository {
  constructor(db, entity) {
    this.entity = entity;
    this.db = db;
  }

  getAll() {
    return this.db[this.entity].findAll();
  }

  get(id) {
    return this.db[this.entity].findOne({ where: { id } });
  }

  create(entity) {
    console.log({ entity });
    const created = this.db[this.entity].create(entity);
    return created;
  }

  update(id, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this.db[this.entity].update(entity, { where: { id } });
  }

  delete(id) {
    return this.db[this.entity].destroy({ where: { id } });
  }
}

module.exports = BaseRepository;
