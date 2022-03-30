module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'import/order': 'off',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

    '@typescript-eslint/no-unused-vars': 'error'
  }
}
