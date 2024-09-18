const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const pluginReact = require('eslint-plugin-react');
const prettier = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  // Основна конфігурація для TypeScript та JSX
  {
    files: ['**/*.{ts,tsx,jsx}'],
    ignores: ['build/', 'dist/assets/index-C_1RAfnd.js', 'node_modules/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: './',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      // Рекомендовані правила ESLint
      ...pluginJs.configs.recommended.rules,

      // Рекомендовані правила TypeScript ESLint
      ...tseslint.configs.recommended.rules,

      // Рекомендовані правила React
      ...pluginReact.configs.flat.recommended.rules,

      // Налаштовані правила
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',

      // Правила Prettier
      'prettier/prettier': ['error'],
    },
  },
  // Конфігурація для файлів .js
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
  },
];
