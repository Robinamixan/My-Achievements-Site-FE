const reactRecommended = require('eslint-plugin-react/configs/recommended.js');
const airbnb = require('eslint-config-airbnb');

module.exports = [
    reactRecommended,
    {
        settings: {
            react: {
                version: 'detect'
            }
        },
        plugins: {
            airbnb: airbnb
        },
        rules: {
            'semi': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
            'no-unused-vars': 'error',
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            'no-magic-numbers': ['error', { 'ignore': [1] }],
            'no-mixed-spaces-and-tabs': 'error',
            'react/jsx-tag-spacing': 2,
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'function-declaration',
                    unnamedComponents: 'function-expression',
                },
            ],
        }
    }
];