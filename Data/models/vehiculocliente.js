'use strict';
module.exports = (sequelize, DataTypes) => {
  const VehiculoCliente = sequelize.define(
    'VehiculoCliente',
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
  VehiculoCliente.associate = function (models) {
    //CLIENTE - VEHICULOCLIENTE
    // VehiculoCliente.belongsTo(models.Cliente, {
    //   foreignKey: 'clienteId',
    //   source: 'id'
    // });
  };
  return VehiculoCliente;
};
