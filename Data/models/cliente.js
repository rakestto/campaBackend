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
    Cliente.belongsToMany(models.Vehiculo, {
      through: 'Interes',
      foreignKey: 'ClienteId'
    });
  };
  return Cliente;
};
