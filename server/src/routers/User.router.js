const router = require('express').Router();
const { User } = require('../../db/models'); //TODO поменять на path.join()

//? req.body = {login, password}
router.post('/registration', async (req, res) => {
  try {
    if ( await User.findOne({ where: { login: req.body.login } })) {
      res.status(400).send('User is already exist!');
    } else {
      await User.create(req.body);
      res.sendStatus(201);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//? req.body = {login, password}
router.get('/login', async (req, res) => {
  try {
    console.log(req.body)
    const dirtUser = await User.findOne({where: req.body})
    if(dirtUser) {
        res.json(dirtUser)
    } else {
        res.sendStatus(400)
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = { router };
