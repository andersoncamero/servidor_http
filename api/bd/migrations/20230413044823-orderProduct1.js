'use strict';
const { Order_ProductSchema, ORDER_PRODUCTS_TABLE} = require('./../models/order-product.models')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCTS_TABLE, Order_ProductSchema)
    
  },

  async down (queryInterface) {
  await queryInterface.dropTable(ORDER_PRODUCTS_TABLE)
  }
};