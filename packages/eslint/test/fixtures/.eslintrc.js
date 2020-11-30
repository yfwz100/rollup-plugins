module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: process.env.NODE_ENV === 'test' ? ["ignored.js"] : ["**/*.js"],
  rules: {
    "no-alert": 2,
    "no-bitwise": 1,
    "camelcase": 1,
    "curly": 1,
    "eqeqeq": 0,
    "no-eq-null": 0,
    "guard-for-in": 1,
    "no-empty": 1,
    "no-use-before-define": 0,
    "object-curly-spacing": 0,
    "no-obj-calls": 2,
    "no-unused-vars": 0,
    "new-cap": 1,
    "no-shadow": 0,
    "strict": 2,
    "global-strict": 0,
    "no-invalid-regexp": 2,
    "comma-dangle": 2,
    "no-undef": 1,
    "no-new": 1,
    "no-extra-semi": 1,
    "no-debugger": 2,
    "no-caller": 1,
    "semi": 1,
    "quotes": 0,
    "no-unreachable": 2,
    "eol-last": 0,
  },
};