const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");

module.exports = ({
  VehiculoRoutes,
  ClienteRoutes,
  FacturaRoutes,
  VehiculoClienteRoutes,
  InteresRoutes,
  AdminRoutes,
  ImagenesRoutes
}) => {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    .use(morgan("tiny"));

  apiRoute.use("/vehiculo", VehiculoRoutes);
  apiRoute.use("/vehiculoCliente", VehiculoClienteRoutes);
  apiRoute.use("/cliente", ClienteRoutes);
  apiRoute.use("/factura", FacturaRoutes);
  apiRoute.use("/interes", InteresRoutes);
  apiRoute.use("/admin", AdminRoutes);
  apiRoute.use("/imagenes", ImagenesRoutes);
  router.use("/api", apiRoute);

  return router;
};
