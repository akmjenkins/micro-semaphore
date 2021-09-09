module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'no-console': ['error'],
    'no-unused-vars': 0,
    'spaced-comment': ['error', 'always'],
    'keyword-spacing': ['error', { after: true }],
    'lines-between-class-members': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
    {
      files: ['**/test/**/*.[t|j]s'],
      env: {
        es6: true,
        jest: true,
        node: true,
      },
      rules: {
        'no-unused-vars': 0,
        'jest/no-disabled-tests': 0,
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
      extends: ['eslint:recommended', 'plugin:jest/recommended'],
    },
  ],
};
