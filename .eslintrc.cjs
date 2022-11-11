/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

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
    project: ['./tsconfig.json', './tsconfig.config.json'],
  },
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      { allowNullish: true },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/default': 'off',
    'import/order': 'warn',
  },
};
