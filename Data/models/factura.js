'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define(
    'Factura',
    {
      cliente: DataTypes.STRING,
      precio: DataTypes.INTEGER,
      fecha: DataTypes.DATE
    },
    {}
  );
  Factura.associate = function (models) {
    //FACTURA - CLIENTE
    Factura.belongsTo(models.Cliente, {
      foreignKey: 'clienteId',
      sourceKey: 'id'
    });
    //FACTURA - VEHICULO
    Factura.hasMany(models.Vehiculo, {
      foreignKey: 'facturaId',
      sourceKey: 'id'
    });
  };
  return Factura;
};
