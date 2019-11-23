'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    cliente: DataTypes.STRING,
    vehiculo: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {});
  Factura.associate = function(models) {
    // associations can be defined here
  };
  return Factura;
};