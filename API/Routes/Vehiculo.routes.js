const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const uuid = require("uuid/V4");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  dest: path.join(__dirname, "../../public/uploads")
}).array("imagenes", 10);

module.exports = ({ VehiculoController }) => {
  const router = Router();

  router.get("/", VehiculoController.getVehiculos.bind(VehiculoController));
  router.get("/:id", VehiculoController.getVehiculo.bind(VehiculoController));
  router.get(
    "/detalle/:id",
    VehiculoController.getVehiculoConImagenes.bind(VehiculoController)
  );
  router.post(
    "/",
    upload,
    VehiculoController.createVehiculo.bind(VehiculoController)
  );
  router.put(
    "/:id",
    VehiculoController.updateVehiculo.bind(VehiculoController)
  );
  router.delete(
    "/:id",
    VehiculoController.deleteVehiculo.bind(VehiculoController)
  );
  return router;
};
