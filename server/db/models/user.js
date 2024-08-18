'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Round, Deck}) {
      this.belongsToMany(Deck, { through: {model: Round}, foreignKey: 'userId', as:'UserToDeck'});
      this.hasMany(Round, {foreignKey: 'userId', as: 'UserToRound'})
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