const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our BlogPost model
class BlogPost extends Model { }
BlogPost.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  },
  { sequelize }
);


module.exports = BlogPost;
