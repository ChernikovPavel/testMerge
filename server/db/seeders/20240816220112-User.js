'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const arr = []
   while(arr.length < 10) arr.push({login: arr.length, password: arr.length})
   await queryInterface.bulkInsert('Users', arr)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
