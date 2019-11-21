const Joi = require("@hapi/joi");

const schema = Joi.object({
  login: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .trim()
    .min(4)
    .max(10)
    .required(),

  repeat_password: Joi.ref("password")
});

const addUserValidation = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = addUserValidation;
