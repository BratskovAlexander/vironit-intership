const User = require("../models/user-model");
const bcrypt = require('bcryptjs');

const get = async () => {
  const result = await User.aggregate([
    {
      $lookup: {
        from: "cities",
        localField: "cityID",
        foreignField: "_id",
        as: "city"
      }
    },
    {
      $project: {
        name: "$name",
        surname: "$surname",
        login: "$login",
        password: "You can't see it",
        city: "$city.city",
        country: "$city.country"
      }
    }
  ]);
  return result;
};

const getUser = async name => {
  
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
  body.password = bcrypt.hashSync(body.password);
  const newUser = new User(body);
  return await newUser.save();
};

const authUser = async body => {
  const user = await User.findOne({ login: body.login})
  if(!user) {
    return "there is no such userLogin"
  }
  const checkLoginPass = await bcrypt.compare(body.password, user.password);
  if (checkLoginPass) {
    return user;
  }
  return "there is no such user"
    
}

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
  authUser,
  put,
  del
};
