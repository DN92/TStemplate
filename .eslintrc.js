module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: 1,
    'react/no-array-index-key': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'react/no-unknown-property': [1, { ignore: ['cell-coor'] }],
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'arrow-body-style': 0,
    'padded-blocks': 1,
    'no-trailing-spaces': 1,
    'no-shadow': 0,
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'arrow-parens': 1,
    'react-hooks/exhaustive-deps': 1,
    'no-useless-return': 1,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
