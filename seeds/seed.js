const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userSeedData = require('./userSeedData.json');
const blogpostSeedData = require('./blogpostSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  const blogposts = await BlogPost.bulkCreate(blogpostSeedData);

  // Create comments at random
  for (let i = 0; i < 10; i++) {
    // Get a random user's `id`
    const { id: randomUserId } = users[
      Math.floor(Math.random() * users.length)
    ];

    // Get a random blogpost's `id`
    const { id: randomBlogpostId, } = blogposts[
      Math.floor(Math.random() * blogposts.length)
    ];

    // Create a new comment with random `comment_budget` and `user_amount` values, but with ids selected above
    await Comment.create({
      content: "meow",
      user_id: randomUserId,
      blogpost_id: randomBlogpostId
    }).catch((err) => {
      // If there's an error, such as the same random pairing of `user.id` and `blogpost.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();
