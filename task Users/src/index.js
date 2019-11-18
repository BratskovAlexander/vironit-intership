const express = require("express");
const user_router = require("./routers/user-router");
const city_router = require("./routers/city-router");
const mongoose = require('mongoose'); 

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect('mongodb+srv://Alexander:monutor93@cluster0-zvaiu.mongodb.net/user', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user_router);
app.use("/city", city_router);

app.listen(PORT, () => {
  console.log(`Server has been started`);
});
