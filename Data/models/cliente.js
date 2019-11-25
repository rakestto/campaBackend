'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define(
    'Cliente',
    {
      email: DataTypes.STRING,
      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      telefono: DataTypes.INTEGER
    },
    {}
  );
  Cliente.associate = function(models) {
    //CLIENTE - VEHICULO => INTERÉS
    Cliente.belongsToMany(models.Vehiculo, {
      through: 'Interes',
      foreignKey: 'clienteId'
    });
    //FACTURA - CLIENTE
    Cliente.hasMany(models.Factura, {
      foreignKey: 'clienteId',
      sourceKey: 'id'
    });
    //CLIENTE - VEHICULOCLIENTE
    Cliente.hasMany(models.VehiculoCliente, {
      foreignKey: 'clienteId',
      sourceKey: 'id'
    });
  };
  return Cliente;
};
