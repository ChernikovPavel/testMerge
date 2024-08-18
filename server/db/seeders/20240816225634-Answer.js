'use strict';
const { Card } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    
    queryInterface.bulkInsert('Answers', [
      {
        correctness: true,
        text: '1972',
        cardId: 1,
      },
      {
        correctness: false,
        text: '1985',
        cardId: 1,
      },
      {
        correctness: false,
        text: '1934',
        cardId: 1,
      },
      {
        correctness: false,
        text: '1999',
        cardId: 1,
      },

      {
        correctness: false,
        text: 'Брюс Уиллис',
        cardId: 2,
      },
      {
        correctness: false,
        text: 'Том Круз',
        cardId: 2,
      },
      {
        correctness: true,
        text: 'Том Хэнкс',
        cardId: 2,
      },
      {
        correctness: false,
        text: 'Райан Гослинг',
        cardId: 2,
      },

      {
        correctness: false,
        text: '3',
        cardId: 3,
      },
      {
        correctness: false,
        text: '12',
        cardId: 3,
      },
      {
        correctness: false,
        text: '5',
        cardId: 3,
      },
      {
        correctness: true,
        text: '37',
        cardId: 3,
      },

      {
        correctness: false,
        text: 'Звездные войны',
        cardId: 4,
      },
      {
        correctness: false,
        text: 'Чтец',
        cardId: 4,
      },
      {
        correctness: false,
        text: 'Над пропастью во ржи',
        cardId: 4,
      },
      {
        correctness: true,
        text: 'ET Экстра-земной',
        cardId: 4,
      },

      {
        correctness: false,
        text: 'Райан Гослинг',
        cardId: 5,
      },
      {
        correctness: false,
        text: 'Моника Белуччи',
        cardId: 5,
      },
      {
        correctness: true,
        text: 'Джули Эндрюс',
        cardId: 5,
      },
      {
        correctness: false,
        text: 'Анжелина Джоли',
        cardId: 5,
      },

      {
        correctness: true,
        text: 'The Great Escape',
        cardId: 6,
      },
      {
        correctness: false,
        text: `Grey's anatomy`,
        cardId: 6,
      },
      {
        correctness: true,
        text: 'Star Wars',
        cardId: 6,
      },
      {
        correctness: false,
        text: 'Операция Ы',
        cardId: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Answers', null, {});
  },
};
