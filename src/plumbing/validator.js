const expressJoiValidation = require("express-joi-validation");

module.exports = expressJoiValidation.createValidator({
  passError: true,
});
