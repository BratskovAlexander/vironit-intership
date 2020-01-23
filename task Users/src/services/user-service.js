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
  const user = await User.aggregate([
    {
      $match: { login: body.login }
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
  if (!user) {
    throw new Error("Нет пользователя с таким Login");
  }
  const checkLoginPass = await bcrypt.compare(body.password, user[0].password);
  if (checkLoginPass) {
    const access_token = jwt.sign(
      {
        login: body.login
      },
      "secretKey",
      { expiresIn: 600 },
      { algorithm: "HS256" }
    );
    const refresh_token = jwt.sign(
      {
        login: body.login
      },
      "secretKey",
      { expiresIn: 1800 },
      { algorithm: "HS256" }
    );
    return {
      userProfile: user[0],
      access_token,
      refresh_token
    };
  }
  throw new Error("Неправильный пароль");
};

const getTokens = async body => {
  const access_token = jwt.sign(
    {
      login: body.login
    },
    "secretKey",
    { expiresIn: 60 },
    { algorithm: "HS256" }
  );
  const refresh_token = jwt.sign(
    {
      login: body.login
    },
    "secretKey",
    { expiresIn: 600 },
    { algorithm: "HS256" }
  );
  return { access_token, refresh_token };
};

const put = async (data, id) => {
  if (data.password) {
    data.password = bcrypt.hashSync(data.password);
  }
  return await User.findByIdAndUpdate({ _id: id }, { ...data }, { new: true });
};

const del = async id => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  get,
  getUser,
  post,
  authUser,
  getTokens,
  put,
  del
};
