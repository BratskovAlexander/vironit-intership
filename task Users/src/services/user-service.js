const User = require("../models/user");

const get = async function() {
  return await User.find({});
};

const post = async req => {
  const newUser = new User({
    name: req.name,
    surname: req.surname
  });
  await newUser.save();
};

const put = async (data, id) => {
  await User.findByIdAndUpdate(id, data);
};

const del = async id => {
  await User.findByIdAndDelete(id);
};

module.exports = {
  get,
  post,
  put,
  del
};
