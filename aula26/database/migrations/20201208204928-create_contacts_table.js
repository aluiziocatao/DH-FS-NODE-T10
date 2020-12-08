'use strict';

module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
      },
      name: {
        type: DataType.STRING
      },
      email: {
        type: DataType.STRING
      },
      message: {
        type: DataType.STRING
      },
      delete:{
        type: DataType.TINYINT,        
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE
      },
      updateAt: {
        allowNull: false,
        type: DataType.DATE
      }
    });
  },

  down: async (queryInterface, DataType) => {
    queryInterface.dropTable('contacts');
  }
};
