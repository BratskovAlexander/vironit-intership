const User = require("../models/user-model");
const ObjectId = require("mongoose").Types.ObjectId;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const getUser = async req => {
  const result = await User.aggregate([
    {
      $match: { login: req.user.login }
    },
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
        city: "$city.city",
        country: "$city.country"
      }
    }
  ]);
  return result;
};

const post = async body => {
  try {
    body.password = bcrypt.hashSync(body.password);
    const newUser = new User(body);
    return await newUser.save();
  } catch (error) {
    throw new Error("Есть пользователь с таким логином");
  }
};

const authUser = async body => {
  const user = await User.findOne({ login: body.login });
  if (!user) {
    return "Нет пользователя с таким Login";
  }
  const checkLoginPass = await bcrypt.compare(body.password, user.password);
  if (checkLoginPass) {
    const access_token = jwt.sign(
      {
        id: ObjectId(user.id)
      },
      "secretKey",
      { algorithm: "HS256" }
    );
    return access_token;
  }
  return "Неправильный пароль";
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
  authUser,
  put,
  del
};
