const City = require("../models/city-model");

const get = async function() {
  return await City.find({});
};

const post = async body => {
  const newCity = new City(body);
  return await newCity.save();
};

const put = async (data, id) => {
  return await City.findByIdAndUpdate(id, data);
};

const del = async id => {
  return await City.findByIdAndDelete(id);
};

module.exports = {
  get,
  post,
  put,
  del
};
