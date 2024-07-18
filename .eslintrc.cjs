module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',

    // 'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',

    // 'plugin:react-hooks/recommended',

    // add new rules
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // ecmaFeatures: {
    //   jsx: true
    // },
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
