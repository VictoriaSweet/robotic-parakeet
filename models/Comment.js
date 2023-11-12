const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Comment model
class Comment extends Model {}
Comment.init(
  {
    content: DataTypes.TEXT
  },
  { sequelize }
);

module.exports = Comment;
