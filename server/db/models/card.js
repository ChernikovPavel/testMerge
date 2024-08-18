"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Answer, Deck }) {
      this.hasMany(Answer, { foreignKey: "cardId" });
      this.belongsTo(Deck, { foreignKey: "deckId" });
    }
  }
  Card.init(
    {
      question: DataTypes.TEXT,
      deckId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
