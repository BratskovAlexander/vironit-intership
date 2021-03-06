const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    cityID: {
      type: mongoose.Types.ObjectId
    }
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
