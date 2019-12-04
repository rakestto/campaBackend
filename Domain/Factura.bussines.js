const BaseBussines = require('../Domain/Base.bussines');

class FacturaBussines extends BaseBussines {
  constructor({ FacturaRepository }) {
    super(FacturaRepository);
    this.FacturaRepository = FacturaRepository;
  }

  async getFacturasCliente(clienteId) {
    const facturasCliente = await this.FacturaRepository.getFacturasCliente(
      clienteId
    );
    return facturasCliente ? facturasCliente : null;
  }
}

module.exports = FacturaBussines;
