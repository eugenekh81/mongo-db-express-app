const { Schema, model } = require('mongoose');
const user = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
}, { versionKey: false, timestamps: true });

const User = model('user', user);

module.exports = User;
