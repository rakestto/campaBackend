'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interes = sequelize.define(
    'Interes',
    {
      vehiculoId: DataTypes.INTEGER,
      mensaje: DataTypes.STRING
    },
    {}
  );
  Interes.associate = function (models) {
    // associations can be defined here
  };
  return Interes;
};
