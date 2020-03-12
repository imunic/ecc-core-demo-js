const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

dotenvExpand(dotenv.config());

module.exports = {
  port: process.env.PORT || 8080,
};
