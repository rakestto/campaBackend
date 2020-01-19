const { Router } = require('express');

module.exports = ({ ClienteController }) => {
  const router = Router();

  router.get('/', ClienteController.getClientes.bind(ClienteController));
  router.get('/email', ClienteController.getClienteEmail.bind(ClienteController));
  router.get('/:email', ClienteController.getCliente.bind(ClienteController));
  router.post('/', ClienteController.createCliente.bind(ClienteController));
  router.put('/:email', ClienteController.updateCliente.bind(ClienteController));
  router.delete(
    '/:email',
    ClienteController.deleteCliente.bind(ClienteController)
  );

  return router;
};
