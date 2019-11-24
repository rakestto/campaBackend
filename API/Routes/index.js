const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

module.exports = ({
  VehiculoRoutes,
  ClienteRoutes,
  FacturaRoutes,
  VehiculoClienteRoutes
}) => {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(morgan('tiny'));

  apiRoute.use('/vehiculo', VehiculoRoutes);
  apiRoute.use('/vehiculoCliente', VehiculoClienteRoutes);
  apiRoute.use('/cliente', ClienteRoutes);
  apiRoute.use('/factura', FacturaRoutes);
  router.use('/api', apiRoute);

  return router;
};
