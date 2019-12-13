"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vehiculo = sequelize.define(
    "Vehiculo",
    {
      matricula: DataTypes.STRING,
      marca: DataTypes.STRING,
      tipo: DataTypes.STRING,
      precio: DataTypes.INTEGER,
      estado: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      ancho: DataTypes.DOUBLE,
      alto: DataTypes.DOUBLE,
      largo: DataTypes.DOUBLE,
      tipoeje: DataTypes.STRING,
      tiporueda: DataTypes.STRING,
      tipofreno: DataTypes.STRING,
      imagen: DataTypes.STRING
    },
    {}
  );
  Vehiculo.associate = function (models) {
    //CLIENTE - VEHICULO => INTERÉS
    Vehiculo.belongsToMany(models.Cliente, {
      through: "Interes",
      foreignKey: "vehiculoId"
    });
    //FACTURA - VEHICULO
    Vehiculo.belongsTo(models.Factura, {
      foreignKey: "facturaId",
      sourceKey: "id"
    });

    Vehiculo.hasMany(models.Imagenes, {
      foreignKey: "vehiculoId",
      sourceKey: "id"
    })
  };
  return Vehiculo;
};
