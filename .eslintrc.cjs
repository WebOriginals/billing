module.exports = {
  root: true,
  plugins: ['sonarjs', 'unicorn'],
  rules: {
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': ['warn', 'always-multiline'],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/better-regex': 'warn',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-switch': 'off',
    'sonarjs/no-useless-catch': 'off',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'prettier',
  ],
};
