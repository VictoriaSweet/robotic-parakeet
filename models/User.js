const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }
User.init(
  {
    name: DataTypes.STRING
  },
  { sequelize }
);

module.exports = User;
