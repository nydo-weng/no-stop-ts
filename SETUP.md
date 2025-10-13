# No Stop TS 项目配置

## 项目初始化

1. `npm create vite@latest app-name`
2. 选择 `React` 框架
3. 选择 `TypeScript` 类型
4. 进入项目目录 `cd app-name`
5. 安装项目依赖 `npm install`

## 项目配置

### ESLint 配置

1. 安装 ESLint `npm init @eslint/config@latest`, 安装后可以 `npx eslint myfile.js` 运行检查 (init 在这里是 **下载并执行该包提供的初始化脚本**)
   1. 选择 `javascript` - what do you want to lint?
   2. 选择 `To check syntax and find problems` - how would you like to use eslint?
   3. 选择 `JavaScript modules (import/export)` - what type of modules does your project use?
   4. 选择 `React` - Which framework does your project use?
   5. 选择 `yes` - Does your project use TypeScript?
   6. 选择 `Browser` + `Node` - Where does your code run?, 因为是 react + vite, 开发工具和构建是在 node, 所以一般两项都选, 可以同时检查 node 的全局变量 (比如 window, document, process 等都不会报 undefined 错误.)
   7. 选择 `JavaScript` - Which language do you want your configuration file be written in?, 实践中通常还是选择 JS 来写 ESLint 配置, 主要原因有:
      1. 兼容性最好: 所有编辑器和工具对 JS 配置都支持, TS 需要额外设置才能被 ESLint 识别.
      2. 启动快: 无需额外 loader 就能直接读取
      3. 通用性: 即使项目是 TS, 也可以用 JS 配置 ESLint, 不会影响规则生效.
   8. 选择 `yes` - The config that you've selected requires the following dependencies: eslint(核心 ESLint 引擎), @eslint/js(ESLint 官方 JS 配置共享包), globals(提供全局变量环境定义), typescript-eslint(包含@typescript-eslint/parser 和 @typescript-eslint/eslint-plugin, 第一个用于让 ESLint 解析 TS 语法, 第二个提供针对 TS 的具体规则(比如类型安全, 接口命名)), eslint-plugin-react(支持 React 特定规则)

2. 额外 ESLint 配置
   1. 安装额外插件 `npm i -D eslint-plugin-react-hooks eslint-plugin-import`, React Hooks 的规则 -> `eslint-plugin-react-hooks`, import/export 规范 -> `eslint-plugin-import`
   2. 修改 ESLint 配置
      - 目前符合:
        1. JS 基础规则
           - 使用 @eslint/js 的 Recommended
           - 检查常规 JS 语法和潜在问题
        2. TS 支持
           - 使用 typescript-eslint, 包含 parser + plugin
           - 加载了 TS 官方推荐规则 tseslint.configs.recommended
        3. React 规则
           - 插件 eslint-plugin-react 已注册
           - JSX/TSX 文件专门启用规则, 并继承了推荐规则
        4. React Hooks
           - 插件 eslint-plugin-react-hooks
           - 核心规则: rules-of-hooks 和 exhaustive-deps 已经启用
        5. Import/Export 规范
           - 插件 eslint-plugin-import
           - 包含 import/order 统一排序
           - 包含 import/no-unresolved 防止路径写错
        6. 全局变量环境
           - globals.browser + globals.node, 避免误报 window, document, process 等
        7. React 版本自动检测
           - setting.react.version = 'detect'
3. 配置 prettier
   1. 安装 Prettier 以及 ESLint 插件 `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
      - prettier: 核心格式化工具
      - eslint-config-prettier: 关闭 ESLint 中与 Prettier 冲突的规则
      - eslint-plugin-prettier: 把 Prettier 规则当做 ESLint 规则执行, 方便 eslint --fix
   2. 新建 Prettier 配置文件 `prettier.config.js`
   3. 配置 ESLint 结合 Prettier
4. 加 Scripts 到 package.json  
   "lint": "eslint .",  
   "lint:fix": "eslint . --fix",

### 别名配置

1. 安装 type 支持 `npm i -D @types/node`
2. vite 配置, 添加 resolve.alias
3. typescript 配置, 在 tsconfig.app.json 中 (效果: 可以在 TS 中使用别名, VSCode 也会识别)
4. eslint 配置, 不然它不认识别名
   1. 安装依赖 `npm i -D eslint-import-resolver-typescript`
   2. 配置 ESLint
