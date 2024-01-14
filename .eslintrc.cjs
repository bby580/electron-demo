// 这个 .eslintrc.cjs 文件是一个用于配置 ESLint 的 JavaScript 文件，它可以在使用 "type":"module" 的 JavaScript 包中运行 ESLint[^1^] [^2^]
module.exports = {
  // root: true 表示这是最顶层的配置文件，ESLint 会停止在父文件夹中查找其他配置文件
  root: true,
  // env: { browser: true, es2020: true } 表示指定代码运行的环境，这里是浏览器和 ES2020 标准
  env: { browser: true, es2020: true },
  // extends: [...] 表示继承一些共享的配置，这里是 ESLint 推荐的配置，TypeScript 推荐的配置，和 React Hooks 推荐的配置
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
  ],
  // ignorePatterns: [...] 表示指定要忽略的文件或目录，这里是 dist 和 .eslintrc.cjs
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parser: '@typescript-eslint/parser' 表示指定要使用的解析器，这里是 TypeScript 的解析器
  parser: '@typescript-eslint/parser',
  // plugins: [...] 表示指定要使用的插件，这里是 react-refresh 插件
  plugins: ['@typescript-eslint'],
  // rules: {...} 表示指定要启用或禁用的规则，以及它们的错误级别或选项
  rules: {
    // 表示启用 react-refresh 插件的 only-export-components 规则，它会警告导出的非组件函数，这里允许导出常量函数[^4^]
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    // 启用 @typescript-eslint 插件的 no-unused-vars 规则，它会报告未使用的变量或参数，这里忽略所有变量，但不忽略参数
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '.*', args: 'none' }
    ],
  },
}