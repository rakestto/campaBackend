const BaseService = require('./Base.service');

class FacturaService extends BaseService {
  constructor({ FacturaBussines }) {
    super(FacturaBussines);
    this.FacturaBussines = FacturaBussines;
  }

  async getFacturasCliente(clienteId) {
    const facturasCliente = await this.FacturaBussines.getFacturasCliente(
      clienteId
    );
    return facturasCliente;
  }
}

module.exports = FacturaService;
