const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // ensure emails are not duplicated
    lowercase: true,
    trim: true,
  },
  number: {
    type: String, // use String to preserve leading 0s if any
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt fields automatically
});

// Avoid model overwrite error in development (especially for Next.js or hot reload environments)
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
