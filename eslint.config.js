import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': "error",
      '@stylistic/jsx-indent-props': ["error", 2],
      '@stylistic/jsx-closing-bracket-location': ["error", "line-aligned"],
      '@stylistic/jsx-closing-tag-location': ["error", "line-aligned"],
      '@stylistic/jsx-max-props-per-line': "error",
      '@stylistic/jsx-curly-newline': "error",
      '@stylistic/arrow-parens': ["error", "as-needed"],
    }
  },
]);