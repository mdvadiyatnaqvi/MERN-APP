const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 400;
    const extraDetails = "Fill the name properly";
    const message = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
