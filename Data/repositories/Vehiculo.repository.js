const BaseRepository = require("./Base.repository");

class VehiculoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Vehiculo");
    this.db = db;
    this.entity = "Vehiculo";
  }

  getVehiculoFiltrado(body) {
    const Sequelize = require("Sequelize");
    const Op = Sequelize.Op;
    const query = {};
    Object.keys(body).map(key => {
      switch (key) {
        case "tipo":
          query.tipo = body.tipo;
          break;
        case "marca":
          query.marca = body.marca;
          break;
        case "preciomin":
          if (query.precio) {
            query.precio = {
              [Op.between]: [body.preciomin, body.preciomax]
            };
          } else {
            query.precio = {
              [Op.gt]: body.preciomin
            };
          }
          break;
        case "preciomax":
          if (query.precio) {
            query.precio = {
              [Op.between]: [body.preciomin, body.preciomax]
            };
          } else {
            query.precio = {
              [Op.lt]: body.preciomax
            };
          }
          break;
        case "anomin":
          if (query.ano) {
            query.ano = {
              [Op.between]: [body.anomin, body.anomax]
            };
          } else {
            query.ano = {
              [Op.gt]: body.anomin
            };
          }
          break;
        case "anomax":
          if (query.ano) {
            query.ano = {
              [Op.between]: [body.anomin, body.anomax]
            };
          } else {
            query.ano = {
              [Op.lt]: body.anomax
            };
          }
          break;
      }
    });
    console.log(query);
    const vehiculos = this.db.Vehiculo.findAll({ where: query });
    return vehiculos;
  }

  createVehiculo(vehiculo) {
    console.log({ vehiculo });
    const created = this.db[this.entity].create(vehiculo);
    return created;
  }
}

module.exports = VehiculoRepository;
