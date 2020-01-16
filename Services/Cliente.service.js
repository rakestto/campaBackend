const BaseService = require('./Base.service');

class ClienteService extends BaseService {
  constructor({ ClienteBussines }) {
    super(ClienteBussines);
    this.ClienteBussines = ClienteBussines
  }

  async getAll() {
    const entities = await this.EntityBussines.getAll();
    return entities;
  }

  async get(email) {
    const entity = await this.EntityBussines.get(email);
    return entity;
  }

  async create(entity) {
    const createdEntity = await this.EntityBussines.create(entity);
    return createdEntity;
  }

  async update(email, entity) {
    const updatedEntity = await this.EntityBussines.update(email, entity);
    return updatedEntity;
  }

  async delete(email) {
    const deletedEntity = await this.EntityBussines.delete(email);
    return deletedEntity;
  }

  async getClienteEmail(email) {
    const cliente = this.ClienteBussines.getClienteEmail(email)
    return cliente
  }
}

module.exports = ClienteService;
