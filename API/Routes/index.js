const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

module.exports = ({ VehiculoRoutes, ClienteRoutes }) => {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(morgan('tiny'));

  apiRoute.use('/vehiculos', VehiculoRoutes);
  apiRoute.use('/cliente', ClienteRoutes);
  router.use('/api', apiRoute);

  return router;
};
