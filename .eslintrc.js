module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-alert': 0,
    'no-console': 0,

    'no-constant-condition': 0,
    'no-shadow': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'global-require': 0,
    'import/extensions': 0,
    'prefer-template': 0,
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow', endOfLine: 'auto' }],
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,

    'react/prop-types': 0,
    'import/no-unresolved': 0,

    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': 1,
    'prefer-arrow-callback': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
