const BaseBussines = require("./Base.bussines");

class ImagenesBussines extends BaseBussines {
  constructor({ ImagenesRepository }) {
    super(ImagenesRepository);
    this.ImagenesRepository = ImagenesRepository;
  }

  async createGalery(imagenes, idVehiculo) {
    if (Object.entries(imagenes).length > 0) {
      const galeria = Object.keys(imagenes).map(img => ({
        vehiculoId: idVehiculo,
        image: imagenes[img].filename
      }));

      const galery = await this.ImagenesRepository.createGalery(galeria);
      return galery;
    } else {
      return null;
    }
  }

  async createNew(idVehiculo, imagen) {
    const createdImage = await this.ImagenesRepository.createNew(idVehiculo, imagen)
    return createdImage
  }

  async deletedByName(name) {
    const deleted = await this.ImagenesRepository.deletedByName(name)
    return deleted
  }
}

module.exports = ImagenesBussines;
