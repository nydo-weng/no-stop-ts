import js from '@eslint/js'; // 官方 JS 推荐配置包
import globals from 'globals'; // 全局变量定义包
import tseslint from 'typescript-eslint'; // @typescript-eslint/parser + @typescript-eslint/eslint-plugin 的组合, 让 ESLint 认识 TS 语法并提供规则, tseslint.configs.recommended 就是加载 TS 推荐规则
import pluginReact from 'eslint-plugin-react'; // 导入 react 插件, 检查 react 相关规则, jsx 是否正确使用, 组件命名规范等
import { defineConfig, globalIgnores } from 'eslint/config'; // ESLint 8.21+ 引入的 flat config 风格
import pluginReactHooks from 'eslint-plugin-react-hooks'; // reaxt hooks 的规则
import pluginImport from 'eslint-plugin-import'; // import/export 规范
import eslintPrettier from 'eslint-plugin-prettier'; // 把 Prettier 规则当做 ESLint 规则执行, 方便 eslint --fix
import eslintConfigPrettier from 'eslint-config-prettier'; // 关闭所有与 Prettier 冲突的 ESLint 规则

export default defineConfig([
  // 导出 ESLint 配置数组
  // v9 新写法, 等价于旧版本 .eslintignore: dist/
  // 告诉 ESLint 不要检查 构建产物
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,ts,jsx,tsx}'], // 指定规则应用到哪些文件
    plugins: { js }, // 使用 @eslint/js 插件来检查 JS 规则
    extends: ['js/recommended'], // 使用 js 推荐规则集
    languageOptions: { globals: { ...globals.browser, ...globals.node } }, // 指定全局变量, 避免 ESLint 报 undefined 错误
  },
  tseslint.configs.recommended, // 直接加载 ts 推荐配置, 包含 ts 特有的规则和计息期, 等价于 把 @typescript-eslint 的 parser + reule 配置好
  // pluginReact.configs.flat.recommended, // 加载 react 插件的推荐规则, 检查 jsx 和 react 代码规范

  // React Hooks 规则
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: { 'react-hooks': pluginReactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // 检查 Hook 使用规则, Hook 必须在函数组件或自定义 Hook 内调用
      'react-hooks/exhaustive-deps': 'warn', // 检查 useEffect 依赖, 提醒 useEffect/useCallback/useMemo 依赖列表不完整
    },
  },

  // Import/Export 规范规则
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/order': [
        // 统一 import 排序
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'error', // 防止路径写错
    },
    // // 让 ESLint 认识别名配置
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

  // TS 常用放宽
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // 先都注释掉, 发现太严格了有困难再回来开
      // '@typescript-eslint/no-explicit-any': 'off', // 允许 any
      // '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许函数不写返回类型
    },
  },

  {
    files: ['**/*.{jsx,tsx}'], // 只作用于 .jsx 和 .tsx 文件
    plugins: { react: pluginReact }, // 注册 react 插件，提供 React 特有的规则
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // 继承 react 插件的推荐规则
      'react/react-in-jsx-scope': 'off', // React 17+ 不再要求在文件开头 import React，所以关闭这个规则
      'react/jsx-uses-react': 'off', // 同上，用于避免 ESLint 报未使用 React
      'react/jsx-uses-vars': 'error', // 确保 JSX 中使用的变量不会被 ESLint 误报为未使用
    },
    settings: {
      react: {
        version: 'detect', // 自动检测 React 版本
      },
    },
  },

  // Prettier 插件
  {
    files: ['**/*.{js,ts,jsx,tsx}'], // 只作用于 .js, .ts, .jsx, .tsx 文件
    plugins: { prettier: eslintPrettier }, // 注册 Prettier 插件
    rules: {
      ...eslintConfigPrettier.rules, // 关闭所有与 Prettier 冲突的 ESLint 规则
      'prettier/prettier': ['error'], // 把 Prettier 问题作为 ESLint 报错
    },
  },
]);
