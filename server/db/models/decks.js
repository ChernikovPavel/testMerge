"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({ Card, Round, User }) {
      this.belongsToMany(User, {through: {model: Round, as: 'DeckToRound'}, foreignKey: 'deckId', as:'DeckToUser'})
      this.hasMany(Card, {foreignKey: 'deckId'})
    }
  }
  Deck.init(
    {
      title: DataTypes.STRING,
      cover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};
