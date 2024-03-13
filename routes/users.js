const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const users = await User.find();

  res.send({ users });
});

router.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (user) {
    res.status(200).send({ user });
  } else {
    res.status(404).send({ message: 'User not found!' });
  }
});

router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;

  const foundUser = await User.findOne({ where: { email } });

  if (foundUser) {
    res.status(422).send({ message: 'Email is already taken' });
    return;
  }
  const user = await User.create({ name, email, password });

  try {
    res.status(201).send({ user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.patch('/:userId', async (req, res, next) => {
  const { userId } = req.params;

  const foundUser = await User.findById(userId);

  if (foundUser) {
    /* const updatedUser = await foundUser.updateOne(req.body); */
    Object.assign(foundUser, req.body);
    await foundUser.save();

    res
      .status(200)
      .send({ message: 'User updated successfully', user: foundUser });
    return;
  }

  res.status(404).send({ message: 'User not found!' });
});

router.delete('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  console.log(userId);
  const user = await User.findById(userId);
  console.log(user);
  if (user) {
    await User.findByIdAndDelete(userId);
    res.status(204);
    res.end();
  }
});

module.exports = router;
