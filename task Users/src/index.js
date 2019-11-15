const express = require("express");
const router = require("./routers/user-router");
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
app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server has been started`);
});
