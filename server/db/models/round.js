'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    static associate(models) {

    }
  }
  Round.init({
    correctAnswers: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    deckId: DataTypes.INTEGER,
    totalAnswers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};