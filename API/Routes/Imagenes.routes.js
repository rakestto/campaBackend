const { Router } = require("express");

module.exports = ({ ImagenesController }) => {
  const router = Router();

  router.get("/", ImagenesController.getImagen.bind(ImagenesController));
  router.get("/id", ImagenesController.getImagenesId.bind(ImagenesController));
  router.post("/", ImagenesController.createImagen.bind(ImagenesController));
  router.put("/:id", ImagenesController.updateImagen.bind(ImagenesController));
  router.delete(
    "/:id",
    ImagenesController.deleteImagen.bind(ImagenesController)
  );
  return router;
};
