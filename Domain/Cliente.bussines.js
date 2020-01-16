const BaseBussines = require('./Base.bussines');

class ClienteBussines extends BaseBussines {
  constructor({ ClienteRepository }) {
    super(ClienteRepository);
    this.ClienteRepository = ClienteRepository
  }
  async getAll() {
    const entities = await this.EntityRepository.getAll();
    return entities;
  }

  async get(email) {
    const entity = await this.EntityRepository.get(email);
    if (!entity) return null;
    return entity;
  }

  async create(entity) {
    const createdEntity = await this.EntityRepository.create(entity);
    return createdEntity;
  }

  async update(email, entity) {
    entity.email = email;
    const updatedEntity = await this.EntityRepository.update(email, entity);
    return updatedEntity;
  }

  async delete(email) {
    return await this.EntityRepository.delete(email);
  }
  async getClienteEmail(email) {
    const cliente = this.ClienteRepository.getClienteEmail(email)
    return cliente
  }
}

module.exports = ClienteBussines;
