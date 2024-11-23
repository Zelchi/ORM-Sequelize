'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Produto 1',
        valor: 10.99,
        quantidade: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Produto 2',
        valor: 20.99,
        quantidade: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Produto 3',
        valor: 30.99,
        quantidade: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};