const BaseService = require("./Base.service");

class ImagenesService extends BaseService {
  constructor({ ImagenesBussines }) {
    super(ImagenesBussines);
    this.ImagenesBussines = ImagenesBussines
    // this.ImagenesService = ImagenesService;

  }
  async deleteByName(name) {
    const deletedImage = await this.ImagenesBussines.deletedByName(name)
    return deletedImage
  }
  async createNew(idVehiculo, imagen) {
    const createdImage = await this.ImagenesBussines.createNew(idVehiculo, imagen)
    return createdImage
  }



}

module.exports = ImagenesService;
