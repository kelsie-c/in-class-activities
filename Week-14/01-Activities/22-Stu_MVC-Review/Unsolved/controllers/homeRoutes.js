const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const usersRaw = await User.findAll();
    const users = usersRaw.map((data) => data.get({ plain: true }));
    res.render('homepage', { users });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
