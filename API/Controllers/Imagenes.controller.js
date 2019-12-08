class ImagenController {
  constructor({ ImagenService }) {
    this.ImagenService = ImagenService;
  }

  async getImagenes(req, res) {
    const Imagenes = await this.ImagenService.getAll();
    return res.send({
      Imagenes
    });
  }

  async getImagenesId(req, res) {
    const { vehiculo } = req.params;
    const Imagenes = await this.ImagenService.getAll(vehiculo);
    return Imagenes ? res.send({ Imagenes }) : res.sendStatus(404);
  }

  async createImagen(req, res) {
    const { body } = req;
    const ImagenCreada = await this.ImagenService.create(body);
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
    const updatedImagen = await this.ImagenService.update(id, body);
    if (!updatedImagen) {
      return res.sendStatus(404);
    }
    return res.send({
      updatedImagen
    });
  }

  async deleteImagen(req, res) {
    const { id } = req.params;
    const deletedImagen = await this.ImagenService.delete(id);
    if (!deletedImagen) {
      return res.sendStatus(404);
    }
    return res.send({
      deletedImagen
    });
  }
}

module.exports = ImagenController;
