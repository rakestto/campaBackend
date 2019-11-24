const { Router } = require('express');

module.exports = ({ FacturaController }) => {
  const router = Router();

  router.get('/', FacturaController.getFacturas.bind(FacturaController));
  router.get('/:id', FacturaController.getFactura.bind(FacturaController));
  router.post('/', FacturaController.createFactura.bind(FacturaController));
  router.put('/:id', FacturaController.updateFactura.bind(FacturaController));
  router.delete(
    '/:id',
    FacturaController.deleteFactura.bind(FacturaController)
  );

  return router;
};
