const BaseService = require("./Base.service");

class ImagenesService extends BaseService {
  constructor({ ImagenesService }) {
    super(ImagenesService);
    this.ImagenesService = ImagenesService;
  }
}

module.exports = ImagenesService;
