const router = require('express').Router();
const {
  User,
  BlogPost
  // Comment,
} = require('../../models');

// GET all blogposts
router.get('/', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll();
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single blogpost
router.get('/:id', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id, {
      // JOIN with users, TODO: load comments
      include: [User]
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a blogpost
router.post('/', async (req, res) => {
  try {
    const blogpostData = await BlogPost.create(req.body);
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a blogpost
router.delete('/:id', async (req, res) => {
  try {
    const blogpostData = await BlogPost.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
