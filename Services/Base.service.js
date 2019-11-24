class BaseService {
  constructor(EntityBussines) {
    this.EntityBussines = EntityBussines;
  }

  async getAll() {
    const entities = await this.EntityBussines.getAll();
    return entities;
  }

  async get(id) {
    const entity = await this.EntityBussines.get(id);
    return entity;
  }

  async create(entity) {
    const createdEntity = await this.EntityBussines.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await this.EntityBussines.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await this.EntityBussines.delete(id);
    return deletedEntity;
  }
}

module.exports = BaseService;
