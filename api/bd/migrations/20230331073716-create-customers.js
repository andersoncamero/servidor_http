'use strict';
const { CustomerSchema, CUSTMER_TABLE} = require('./../models/customer.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTMER_TABLE, CustomerSchema)
  },

  async down (queryInterface) {
  await queryInterface.dropTable(CUSTMER_TABLE)
  }
};
