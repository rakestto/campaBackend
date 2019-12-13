const BaseRepository = require("./Base.repository");

class ImagenesRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Imagenes");
  }

  async getImagenesVehiculo(vehiculoId) {
    const imagenes = this.db.Imagenes.findAll({
      where: { vehiculoId: vehiculoId }
    });
    return imagenes;
  }

  async createGalery(imagen) {
    console.log(imagen);
    const created = await this.db.Imagenes.bulkCreate(imagen);
    return created;
  }

  async deletedByName(name) {
    const deleted = await this.db.Imagenes.destroy({ where: { image: name } })
    return deleted
  }
}

module.exports = ImagenesRepository;
