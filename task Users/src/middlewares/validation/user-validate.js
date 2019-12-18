const Joi = require("@hapi/joi");

const addUserSchema = Joi.object({
  name: Joi.string(),
  surname: Joi.string(),
  cityID: Joi.string(),
  login: Joi.string()
    .min(4)
    .max(30)
    .required(),

  password: Joi.string()
    .trim()
    .min(4)
    .max(10)
    .required(),

  repeat_password: Joi.ref("password")
});

module.exports = addUserSchema;
