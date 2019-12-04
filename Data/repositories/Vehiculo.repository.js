const BaseRepository = require("./Base.repository");

class VehiculoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Vehiculo");
    this.db = db;
    this.entity = "Vehiculo";
  }

  createVehiculo(vehiculo) {
    console.log({ vehiculo });
    const created = this.db[this.entity].create(vehiculo);
    return created;
  }
}

module.exports = VehiculoRepository;
