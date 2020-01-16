'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    email: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    apellidos: DataTypes.STRING
  }, {});
  Cliente.associate = function (models) {
    // associations can be defined here
    Cliente.belongsToMany(models.Vehiculo, {
      through: 'Interes',
      foreignKey: 'emailCliente'
    });
    //CLIENTE - FACTURA 
    Cliente.hasMany(models.Factura, {
      foreignKey: 'emailCliente',
      targetKey: 'email'
    });
  };
  return Cliente;
};