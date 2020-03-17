const Joi = require("@hapi/joi");

module.exports = {
  country: Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().required(),
    code: Joi.string()
      .length(4)
      .required(),
    codeA2: Joi.string()
      .length(2)
      .required(),
    codeA3: Joi.string()
      .length(3)
      .required(),
  }),
  get: Joi.object().keys({
    id: Joi.number().required(),
  }),
  delete: Joi.object().keys({
    id: Joi.number().required(),
  }),
};
