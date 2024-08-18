'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
        static associate({Card}) {
          this.belongsTo(Card, { foreignKey: 'cardId' });
    }
  }
  Answer.init({
    correctness: DataTypes.STRING,
    text: DataTypes.STRING,
    cardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};