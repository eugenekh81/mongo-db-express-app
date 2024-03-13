const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const URI_DB =
  'mongodb+srv://eugenekh:11223344@cluster0.9ygq56g.mongodb.net/users?retryWrites=true';

const userRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

mongoose.connect(URI_DB).then(() => {
  console.log('Database connection successful');

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
