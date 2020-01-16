'use strict';
module.exports = (sequelize, DataTypes) => {
  const cliente = sequelize.define('cliente', {
    email: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING
  }, {});
  cliente.associate = function (models) {
    // associations can be defined here
  };
  return cliente;
};


