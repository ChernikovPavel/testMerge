'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Decks', [
      {
        title: 'Кино',
        cover: '/pics/1'
      },
      {
        title: 'Спорт',
        cover: '/pics/1'
      },
      {
        title: 'Наука',
        cover: '/pics/1'
      },
      {
        title: 'Настольные игры',
        cover: '/pics/1'
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Decks', null, {});
  },
};
