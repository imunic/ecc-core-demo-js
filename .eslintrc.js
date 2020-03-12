const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ["airbnb-base", "prettier"],
  env: {
    node: true,
    es6: true,
    browser: true,
    "jest/globals": true,
  },
  plugins: ["prettier", "jest"],
  rules: {
    "prettier/prettier": ERROR,
    quotes: [ERROR, "double", {avoidEscape: true, allowTemplateLiterals: true}],
  },
};
