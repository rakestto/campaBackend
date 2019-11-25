const BaseService = require('./Base.service');

class FacturaService extends BaseService {
  constructor({ FacturaBussines, FacturaRepository }) {
    super(FacturaBussines);
    this.FacturaRepository = FacturaRepository;
  }

  async getFacturasCliente(clienteId) {
    const facturasCliente = await this.FacturaRepository.getFacturasCliente(
      clienteId
    );
    return facturasCliente;
  }
}

module.exports = FacturaService;
