class BaseBussines {
  constructor(EntityRepository) {
    this.EntityRepository = EntityRepository;
  }

  async getAll() {
    const entities = await this.EntityRepository.getAll();
    return entities;
  }

  async get(id) {
    const entity = await this.EntityRepository.get(id);
    if (!entity) return null;
    return entity;
  }

  async create(entity) {
    const createdEntity = await this.EntityRepository.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    entity.id = id;
    const updatedEntity = await this.EntityRepository.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    return await this.EntityRepository.delete(id);
  }
}

module.exports = BaseBussines;
