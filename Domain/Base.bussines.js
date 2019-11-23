class BaseBussines {
  constructor({ EntityRepository }) {
    this.EntityRepository = EntityRepository;
  }

  getAll = async () => {
    const entities = await this.EntityRepository.getAll();
    return entities;
  };

  async get(id) {
    const entity = await this.EntityBussines.get(id);
    if (!entity) return null;
    return entity;
  }

  async create(entity) {
    const createdEntity = await this.EntityBussines.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    entity.id = id;
    const updatedEntity = await this.EntityBussines.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    return await this.EntityBussines.delete(id);
  }
}
