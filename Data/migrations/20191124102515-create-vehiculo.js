"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Vehiculos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      ancho: {
        type: Sequelize.DOUBLE
      },
      alto: {
        type: Sequelize.DOUBLE
      },
      tipoeje: {
        type: Sequelize.STRING
      },
      tiporueda: {
        type: Sequelize.STRING
      },
      tipofreno: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Vehiculos");
  }
};
