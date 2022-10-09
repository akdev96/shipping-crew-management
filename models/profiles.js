const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profileCategory: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  regNo: {
    type: String,
    required: true,
  },
  availabilityStatus: {
    type: String,
    default: "Available",
  },
  grade: {
    type: String,
  },
  salary: {
    type: Number,
  },
  profilePic: {
    type: String,
  },
  log: [
    {
      description: String,
      date: Date,
    },
  ],
  isActive: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Profiles', profileSchema);