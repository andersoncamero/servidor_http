'use strict';
const { CategorySchemsa, CATEGORY_TABLE} = require('./../models/category.models')
const { ProductSchemsa, PRODUCT_TABLE} = require('./../models/product.models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchemsa)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchemsa)
  },

  async down (queryInterface) {
  await queryInterface.dropTable(CATEGORY_TABLE)
  await queryInterface.dropTable(PRODUCT_TABLE)
  }
};
