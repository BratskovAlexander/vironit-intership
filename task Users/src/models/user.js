const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  __v: {
    type: Number,
    select: false
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
