import js from '@eslint/js';
import globals from 'globals';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    // Based on @eslint/js recommended rules
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    // Based on playwright recommended rules
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      playwright,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.browser,
      },
    },
    rules: {
      ...playwright.configs.recommended.rules,
    },
  },
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier,
    },
    rules: {
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/missing-playwright-await': 'error',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    ignores: [
      'node_modules/',
      'test-results/',
      'playwright-report/',
      'allure-results/',
      'allure-report/',
    ],
  },
];
