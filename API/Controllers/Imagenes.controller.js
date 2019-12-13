class ImagenesController {
  constructor({ ImagenesService }) {
    this.ImagenesService = ImagenesService;
  }

  async getImagenes(req, res) {
    const Imagenes = await this.ImagenesService.getAll();
    return res.send({
      Imagenes
    });
  }

  async getImagenesId(req, res) {
    const { vehiculo } = req.params;
    const Imagenes = await this.ImagenesService.getAll(vehiculo);
    return Imagenes ? res.send({ Imagenes }) : res.sendStatus(404);
  }

  async createImagen(req, res) {
    const { body } = req;
    const ImagenCreada = await this.ImagenesService.create(body);
    if (!ImagenCreada) {
      return res.sendStatus(404);
    }
    return res.send({
      ImagenCreada
    });
  }

  async updateImagen(req, res) {
    const { body } = req;
    const { id } = req.params;
    const updatedImagen = await this.ImagenesService.update(id, body);
    if (!updatedImagen) {
      return res.sendStatus(404);
    }
    return res.send({
      updatedImagen
    });
  }

  async deleteImagen(req, res) {
    const { id } = req.params;
    const deletedImagen = await this.ImagenesService.delete(id);
    if (!deletedImagen) {
      return res.sendStatus(404);
    }
    return res.send({
      deletedImagen
    });
  }

  async deleteImagenByName(req, res) {
    const { name } = req.params
    const deletedImagen = await this.ImagenesService.deleteByName(name)
    if (deletedImagen == 0) {
      return res.sendStatus(404);
    }
    return res.send({
      deletedImagen: true
    });
  }
}


module.exports = ImagenesController;
