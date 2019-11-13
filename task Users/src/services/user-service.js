const fs = require("fs");
const path = require("path");
const uuidv4 = require("uuid/v4");

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "users.json"))
);

const get = () => {
  return users;
};

const post = req => {
  const user = {
    id: uuidv4(),
    name: req.name,
    surname: req.surname
  };
  users.push(user);
  fs.writeFile(
    path.join(__dirname, "..", "users.json"),
    JSON.stringify(users),
    function() {}
  );
  return users;
};

const put = (data, id) => {
  const index = users.findIndex(user => user.id === id);
  users[index] = { ...users[index], ...data };
  if (index === -1) {
    throw new Error(error);
  } else {
    fs.writeFile(
      path.join(__dirname, "..", "users.json"),
      JSON.stringify(users),
      function() {}
    );
  }
  return users;
};

const del = id => {
  const index = users.findIndex(user => user.id === id);
  console.log(index);
  if (index === -1) {
    throw new Error(error);
  } else {
    users.splice(index, 1);
    fs.writeFile(
      path.join(__dirname, "..", "users.json"),
      JSON.stringify(users),
      function() {}
    );
  }
  return users;
};

module.exports = {
  get,
  post,
  put,
  del
};
