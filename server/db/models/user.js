'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Round, Deck}) {
      this.belongsToMany(Deck, { through: {model: Round, as: 'UserToRound'}, foreignKey: 'userId', as:'UserToDeck'});
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};