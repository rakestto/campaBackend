'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehiculo = sequelize.define(
    'Vehiculo',
    {
      matricula: DataTypes.STRING,
      marca: DataTypes.STRING,
      tipo: DataTypes.STRING,
      precio: DataTypes.INTEGER,
      estado: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      ancho: DataTypes.DOUBLE,
      alto: DataTypes.DOUBLE,
      tipoeje: DataTypes.STRING,
      tiporueda: DataTypes.STRING,
      tipofreno: DataTypes.STRING
    },
    {}
  );
  Vehiculo.associate = function(models) {
    Vehiculo.belongsToMany(models.Cliente, {
      through: 'Interes',
      foreignKey: 'VehiculoId'
    });
  };
  return Vehiculo;
};
