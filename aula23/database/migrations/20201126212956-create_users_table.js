'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    queryInterface.createTable('users', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataType.STRING,
      email: DataType.STRING,
      password: DataType.STRING,
      createdAt: {
        type: DataType.DATE
      },
      updatedAt: {
        type: DataType.DATE
      }
  });
},

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};