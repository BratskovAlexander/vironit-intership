const validationMiddleware = schema => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = validationMiddleware;