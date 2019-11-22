const Joi = require("@hapi/joi");

const upDateUserSchema = Joi.object({
  name: Joi.string(),
  surname: Joi.string(),
  cityID: Joi.string(),
  login: Joi.string()
    .alphanum()
    .min(4)
    .max(15),

  password: Joi.string()
    .trim()
    .min(4)
    .max(10),

  repeat_password: Joi.ref("password")
});

module.exports = upDateUserSchema;
