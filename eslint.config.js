const reactRecommended = require('eslint-plugin-react/configs/recommended.js');

module.exports = [
  reactRecommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'no-unused-vars': 'error',
      'no-multiple-empty-lines': ['error', {'max': 1}]
    }
  }
];