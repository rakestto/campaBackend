const { Router } = require('express');

module.exports = ({ InteresController }) => {
  const router = Router();

  router.get('/', InteresController.getInteres.bind(InteresController));
  router.get('/id', InteresController.getIntereses.bind(InteresController));
  router.post('/', InteresController.createInteres.bind(InteresController));
  router.put('/:id', InteresController.updateInteres.bind(InteresController));
  router.delete(
    '/:id',
    InteresController.deleteInteres.bind(InteresController)
  );
  return router;
};
