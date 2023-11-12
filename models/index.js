const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

BlogPost.User = BlogPost.belongsTo(User);
BlogPost.Comments = BlogPost.hasMany(Comment);

User.BlogPosts = User.hasMany(BlogPost);
User.Comments = User.hasMany(Comment);

Comment.User = Comment.belongsTo(User);
Comment.BlogPost = Comment.belongsTo(BlogPost);

module.exports = { User, BlogPost, Comment };
