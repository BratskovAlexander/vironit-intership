const User = require("../models/user");

const create = async (req) => {
  const user = new User(req.body);
  await user.save();
  return { user };
};

const read = async () => {
  return await User.find({});
};

const update = async (req) => {
  return await User.findByIdAndUpdate(req.params.id, req.body);
};

const del = async (req) => {
  return await req.user.remove();
};
 
module.exports = {
    create,
    read,
    update,
    del
}