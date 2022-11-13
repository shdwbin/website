/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const { resolve } = require('node:path');

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'xo-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/extensions': ['.ts', '.js', '.vue'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [resolve(__dirname, 'tsconfig.json'), resolve(__dirname, 'tsconfig.config.json')],
  },
  rules: {
    'prettier/prettier': 'warn',

    'vue/multi-word-component-names': 'off',

    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      { allowNullish: true },
    ],

    'import/order': 'warn',
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default-member': 'off',
  },
};
