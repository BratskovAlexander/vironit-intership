const User = require("../models/user-model");

const get = async () => {
  const result = await User.aggregate([
    {
      $lookup: {
        from: "cities",
        localField: "cityID",
        foreignField: "_id",
        as: "city"
      }
    }
  ]);
  return result;
};

const getUser = async name => {
  console.log(name);
  const result = await User.aggregate([
    {
      $match: {
        name: name
      }
    },
    {
      $lookup: {
        from: "cities",
        localField: "cityID",
        foreignField: "_id",
        as: "city"
      }
    }
  ]);

  return result;
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
  getUser,
  post,
  put,
  del
};
