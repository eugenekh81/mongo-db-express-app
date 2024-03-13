const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

mongoose.connect(DB_URI).then(() => {
  console.log('Database connection successful');

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
