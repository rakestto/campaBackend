const { Router } = require('express');

module.exports = ({ VehiculoController }) => {
  const router = Router();

  router.get('/', VehiculoController.getVehiculos.bind(VehiculoController));
  router.get('/:id', VehiculoController.getVehiculo.bind(VehiculoController));
  router.post('/', VehiculoController.createVehiculo.bind(VehiculoController));
  router.put(
    '/:id',
    VehiculoController.updateVehiculo.bind(VehiculoController)
  );
  router.delete(
    '/:id',
    VehiculoController.deleteVehiculo.bind(VehiculoController)
  );
  return router;
};
