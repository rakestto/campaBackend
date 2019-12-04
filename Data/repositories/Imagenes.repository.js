const BaseRepository = require("./Base.repository");

class ImagenesRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Imagenes");
  }

  async getImagenesVehiculo(vehiculoId) {
    const imagenes = this.db.Imagenes.findAll({
      where: { vehiculo: vehiculoId }
    });
    return imagenes;
  }

  async createGalery(imagen) {
    console.log(imagen);
    const created = await this.db.Imagenes.bulkCreate(imagen);
    return created;
  }
}

module.exports = ImagenesRepository;
