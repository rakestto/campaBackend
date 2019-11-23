const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = ({
  VehiculoRoutes
  //   ClienteRoutes,
  //   FacturaRoutes,
  //   InteresRoutes,
  //   VehiculoClienteRoutes
}) => {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  apiRoute.use('/vehiculo', VehiculoRoutes);
  //   apiRoute.use('/cliente', VehiculoRoutes);
  //   apiRoute.use('/factura', VehiculoRoutes);
  //   apiRoute.use('/interes', VehiculoRoutes);
  //   apiRoute.use('/vehiculocliente', VehiculoRoutes);
  router.use('/api', apiRoute);

  return router;
};
