"use strict";
module.exports = (sequelize, DataTypes) => {
  const Imagenes = sequelize.define(
    "Imagenes",
    {
      vehiculo: {
        // foreignKey: false,
        type: DataTypes.INTEGER
      },
      image: DataTypes.STRING
    },
    {}
  );
  Imagenes.associate = function(models) {
    // associations can be defined here
  };
  return Imagenes;
};