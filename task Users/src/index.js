const express = require("express");
const router = require("./routers/user-router");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server has been started`);
});
