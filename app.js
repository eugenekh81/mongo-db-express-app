const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  console.log('getting a root folder');

  res.send('Hello world');
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});
