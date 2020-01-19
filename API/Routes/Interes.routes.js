const { Router } = require('express');

module.exports = ({ InteresController }) => {
  const router = Router();

  router.get('/', InteresController.getIntereses.bind(InteresController));
  router.get('/id', InteresController.getInteres.bind(InteresController));
  router.post('/', InteresController.createInteres.bind(InteresController));
  router.put('/:id', InteresController.updateInteres.bind(InteresController));
  router.delete(
    '/:vehiculoId',
    InteresController.deleteInteres.bind(InteresController)
  );
  return router;
};
