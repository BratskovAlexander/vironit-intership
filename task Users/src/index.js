const express = require("express");
const user_router = require("./routers/user-router");
const city_router = require("./routers/city-router");
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors')

const PORT = process.env.PORT || 3030;

const app = express();

mongoose.connect(
  "mongodb+srv://Alexander:monutor93@cluster0-zvaiu.mongodb.net/user",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/users", user_router);
app.use("/cities", city_router);

app.listen(PORT, () => {
  console.log(`Server has been started`);
});
