module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint"],
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "comma-dangle": 2,
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
