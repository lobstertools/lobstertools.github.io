import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['dist', '.dist', 'dist/package', 'node_modules', 'build.mjs', '*.tsbuildinfo'],
    },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            // Cast to any to fix type mismatch with "flat" config property
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            'react-hooks': reactHooks as any,
            'react-refresh': reactRefresh,
            prettier: prettierPlugin,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/no-explicit-any': 'warn',
            'prettier/prettier': 'warn',
        },
    },
    // This must be last to disable any conflicting rules from previous configs
    eslintConfigPrettier,
]);
