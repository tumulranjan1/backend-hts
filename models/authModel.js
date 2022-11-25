const mongoose = require("mongoose");
const validator = require("validator");

// A USER MUST SEND HIS NAME, EMAIL, PHONE NUMBER, BRANCH AND PASSWORD
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    // EMAIL SHOULD BE UNIQUE
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    // TO VERIFY THAT THE STRING SENT IS ACTUALLY AN EMAIL
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// CREATING AN OBJECT USER BASED ON THE USER SCHEMA
const User = mongoose.model("User", userSchema);

// EXPORTING THE USER OBJECT
module.exports = User;
