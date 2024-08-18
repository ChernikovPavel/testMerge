'use strict';
const { User, Deck } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dirtUsers = await User.findAll({ attributes: ['id'] });
    const dirtDecks = await Deck.findAll({ attributes: ['id'] });
    const imax = Math.min(dirtUsers.length, dirtDecks.length);
    const arr = [];
    for (let i = 0; i < imax; i++) {
      arr.push({
        correctAnswers: Math.floor(Math.random() * 10),
        userId: dirtUsers[i].dataValues.id,
        deckId: dirtDecks[i].dataValues.id,
        totalAnswers: 10
      });
    }
    queryInterface.bulkInsert('Rounds', arr)
  },
  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Rounds', null, {});
  },
};
