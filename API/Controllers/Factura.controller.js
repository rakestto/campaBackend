class FacturaController {
  constructor({ FacturaService }) {
    this.FacturaService = FacturaService;
  }

  async getFacturas(req, res) {
    const facturas = await this.FacturaService.getAll();
    return facturas ? res.send({ data: facturas }) : res.sendStatus(404);
  }

  async getFactura(req, res) {
    const { id } = req.params;
    const factura = await this.FacturaService.get(id);
    return factura ? res.send({ data: factura }) : res.sendStatus(404);
  }

  async createFactura(req, res) {
    const { body } = req;
    const facturaCreada = await this.FacturaService.create(body);
    facturaCreada ? res.send({ data: facturaCreada }) : res.sendStatus(404);
  }

  async updateFactura(req, res) {
    const { id } = req.params;
    const { body } = req;
    const updatedFactura = await this.FacturaService.update(id, body);
    updatedFactura ? res.send({ data: updatedFactura }) : res.sendStatus(404);
  }

  async deleteFactura(req, res) {
    const { id } = req.params;
    const deletedFactura = await this.FacturaService.delete(id);
    deletedFactura ? res.send({ data: deletedFactura }) : res.sendStatus(404);
  }
}

module.exports = FacturaController;
