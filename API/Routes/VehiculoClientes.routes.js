const { Router } = require('express');

module.exports = ({ VehiculoClienteController }) => {
  const router = Router();

  router.get(
    '/',
    VehiculoClienteController.getVehiculosCliente.bind(
      VehiculoClienteController
    )
  );
  router.get(
    '/:id',
    VehiculoClienteController.getVehiculoCliente.bind(VehiculoClienteController)
  );
  router.post(
    '/',
    VehiculoClienteController.createVehiculoCliente.bind(
      VehiculoClienteController
    )
  );
  router.put(
    '/:id',
    VehiculoClienteController.updateVehiculoCliente.bind(
      VehiculoClienteController
    )
  );
  router.delete(
    '/:id',
    VehiculoClienteController.deleteVehiculoCliente.bind(
      VehiculoClienteController
    )
  );

  return router;
};
