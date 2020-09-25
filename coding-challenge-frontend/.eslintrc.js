module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'prettier', 'airbnb'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    actor: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
  },
};
