const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, 
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
