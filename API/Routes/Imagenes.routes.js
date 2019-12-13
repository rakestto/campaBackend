const { Router } = require("express");

module.exports = ({ ImagenesController }) => {
    const router = Router();

    router.get("/", ImagenesController.getImagenes.bind(ImagenesController));
    router.get("/:id", ImagenesController.getImagenesId.bind(ImagenesController));
    router.post("/", ImagenesController.createImagen.bind(ImagenesController));
    router.put("/:id", ImagenesController.updateImagen.bind(ImagenesController));
    router.delete(
        "/:id",
        ImagenesController.deleteImagen.bind(ImagenesController)
    );
    router.delete(
        "/deleteName/:name",
        ImagenesController.deleteImagenByName.bind(ImagenesController)
    );
    router.post('actualizar/:imagenes')
    // router.delete("/vehiculogalery/:id", ImagenesController.deleteGaleryByVehiculoId.bind(ImagenesController))
    return router;
};
