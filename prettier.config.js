const config = {
  tabWidth: 2,
  semi: false,
  plugins: ["prettier-plugin-jinja-template"],
  overrides: [
    {
      files: ["*.njk"],
      options: {
        parser: "jinja-template",
      },
    },
  ],
}

module.exports = config
