'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interes = sequelize.define('Interes', {
    cliente: DataTypes.STRING,
    vehiculo: DataTypes.INTEGER,
    mensaje: DataTypes.STRING
  }, {});
  Interes.associate = function(models) {
    // associations can be defined here
  };
  return Interes;
};