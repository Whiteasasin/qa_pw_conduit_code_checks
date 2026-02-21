import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  eslintConfigPrettier,
  {
    ...pluginJs.configs.recommended,
    ...playwright.configs['flat/recommended'],
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,

      'no-unused-vars': 'error',
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
        },
      ],
      'playwright/expect-expect': 'off',
    },
    ignores: [
      '**/node_modules/*',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
]);
