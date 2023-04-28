'use strict';
const { OrderSchemsa, ORDER_TABLE} = require('./../models/order.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchemsa)
    
  },

  async down (queryInterface) {
  await queryInterface.dropTable(ORDER_TABLE)
  }
};

