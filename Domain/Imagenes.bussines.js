const BaseBussines = require("./Base.bussines");

class ImagenesBussines extends BaseBussines {
  constructor({ ImagenesRepository }) {
    super(ImagenesRepository);
    this.ImagenesRepository = ImagenesRepository;
  }

  async createGalery(imagenes, idVehiculo) {
    if (Object.entries(imagenes).length > 0) {
      const galeria = imagenes.map(img => ({
        vehiculo: idVehiculo,
        image: img.filename
      }));

      const galery = await this.ImagenesRepository.createGalery(galeria);
      return galery;
    } else {
      return null;
    }
  }

  async deletedByName(name) {
      const deleted = await this.ImagenesRepository.deletedByName(name)
      return deleted
  }
}

module.exports = ImagenesBussines;
