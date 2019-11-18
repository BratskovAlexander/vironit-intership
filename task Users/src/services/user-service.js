const User = require("../models/user-model");

const get = async function() {
  return await User.find({});
};

const post = async body => {
  const newUser = new User(body);
  return await newUser.save();
};

const put = async (data, id) => {
  return await User.findByIdAndUpdate(id, data);
};

const del = async id => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  get,
  post,
  put,
  del
};
