// eslint.config.js
// import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  // 忽略目录
  { ignores: ['dist', 'node_modules', 'build'] },

  // 👇 新增：Node.js 和配置文件支持（关键！）
  {
    files: [
      'commitlint.config.cjs',
      '*.config.js',
      '*.config.cjs',
      'vite.config.js',
      'vitest.config.*',
      '.eslintrc.cjs',
      // 可按需添加其他配置文件
    ],
    languageOptions: {
      globals: {
        ...globals.node, // ← 提供 module, require, __dirname
        ...globals.commonjs, // ← 提供 exports（可选，但推荐）
      },
    },
  },

  // 基础 JS 规则（前端代码）
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        // 注意：这里不加 node，避免前端误用
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },

  // TypeScript
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  }
);
