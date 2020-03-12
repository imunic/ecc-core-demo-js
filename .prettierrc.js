module.exports = {
  bracketSpacing: false,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  overrides: [
    {
      files: "*.yaml",
      options: {
        singleQuote: true,
      },
    },
  ],
};
