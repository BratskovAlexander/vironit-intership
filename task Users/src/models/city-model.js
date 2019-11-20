const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

const City = mongoose.model("City", citySchema);
module.exports = City;
