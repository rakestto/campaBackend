'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define(
    'Factura',
    {
      precio: DataTypes.INTEGER,
      fecha: DataTypes.DATE
    },
    {}
  );
  Factura.associate = function (models) {
    // FACTURA - CLIENTE
    // Factura.belongsTo(models.Cliente, {
    //   foreignKey: 'clienteEmail',
    //   sourceKey: 'email'
    // });
    //FACTURA - VEHICULO
    Factura.hasMany(models.Vehiculo, {
      foreignKey: 'vehiculoId',
      sourceKey: 'id'
    });
  };
  return Factura;
};
