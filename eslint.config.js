import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
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
  },
  // Ignore Fast Refresh issue with shadcn/ui's component
  // Files affected: theme-provider, badge, button, navigation-menu
  // This will be removed when the issue given is resolved.
  {
    files: ['**/ui/**/*.ts', '**/ui/**/*.tsx', '**/shared/theme-provider.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
