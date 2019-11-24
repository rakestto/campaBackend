const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

module.exports = ({ VehiculoRoutes }) => {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(morgan('tiny'));

  apiRoute.use('/vehiculos', VehiculoRoutes);
  router.use('/api', apiRoute);

  return router;
};
