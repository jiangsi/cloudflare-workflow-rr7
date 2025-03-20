# 在 Cloudflare Workers 上使用 React Router 7.4

这是一个试验性项目，使用 `@cloudflare/vite-plugin` 将 React Router 7.4 与 Cloudflare Workers 集成。目标是在 Cloudflare Workers 上部署 支持workflow 应用程序，以提高性能和可扩展性。

测试
/create 可以创建工作流
/get_workflow_status/<工作流id>  可以查看workflow的状态。

## 背景

在 Cloudflare Workers 平台上，我们经常需要处理长时间运行的任务。传统的 Workers 有执行时间限制，这限制了处理复杂任务的能力。Cloudflare 引入了 Workflow 功能来解决这个问题，它允许我们创建长时间运行的任务，而不会受到 Workers 执行时间限制的影响。

## 问题

在开发过程中，我们遇到了以下具体问题：

1. React Router 7.4 与 Cloudflare Workers 的集成问题
   - 开发环境使用 `npm run dev` 时路由正常工作
   - 但在 Cloudflare Workers 环境中，路由请求无法正确响应
   - 需要确保所有路由请求都能被正确处理，包括 API 请求和页面请求

2. Workflow 功能集成挑战
   - 需要处理 Workflow 的创建和状态查询
   - 前端需要实时展示 Workflow 的执行状态
   - 需要处理 Workflow 执行过程中的错误情况

3. 开发环境与生产环境的不一致
   - 本地开发环境使用 Vite 开发服务器
   - 生产环境使用 Cloudflare Workers
   - 需要确保两个环境的行为一致

4. 构建和部署流程
   - 需要正确处理静态资源的构建和部署
   - 需要确保 API 路由和页面路由都能正确工作
   - 需要处理环境变量和配置

## 解决方案

我们通过以下方式解决了这些问题：

1. 使用 `@cloudflare/vite-plugin@0.1.13` 实现了开发环境和生产环境的无缝集成
2. 实现了 Workflow 的创建和状态查询 API
3. 使用 React Router 7.4 的新特性优化了路由处理
4. 实现了优雅的状态管理和错误处理

## 线上demo
[cloudflare-workflow-rr7.jiangsi.workers.dev](https://cloudflare-workflow-rr7.jiangsi.workers.dev)

## 特性

- 使用 TypeScript 提高类型安全性和开发者体验
- 使用 React Router 7.4 进行客户端路由
- 使用 Cloudflare Workers 进行无服务器部署
- 使用 Vite 6 作为构建工具和开发服务器
- 使用 `@cloudflare/vite-plugin@0.1.13` 与 Cloudflare Workers 无缝集成
- 支持 Cloudflare Workers 的 Workflow 功能
- 开发环境和生产环境无缝集成

## 项目结构

- `app/`: 包含 React 应用程序代码
  - `routes/`: React Router 路由
- `workers/`: Cloudflare Worker 脚本
- `tsconfig.json`: 项目的 TypeScript 配置
- `tsconfig.node.json`: Node.js 的 TypeScript 配置
- `tsconfig.cloudflare.json`: Cloudflare Workers 的 TypeScript 配置
- `vite.config.ts`: Vite 配置文件

## 入门指南

1. 克隆仓库
2. 安装依赖项: `npm install` 或 `yarn install`
3. 启动开发服务器: `npm run dev` 或 `yarn dev`
4. 本地测试 Cloudflare Workers: `npm run cfdev`
5. 生产构建: `npm run build` 或 `yarn build`
6. 部署到 Cloudflare Workers: `npm run deploy`

## 开发环境

- Node.js >= 20.0.0
- npm 或 yarn 包管理器
- Cloudflare Workers 账号

## 贡献

欢迎贡献！如果您有任何建议或改进，请提出 issue 或提交 pull request。

## 背景和原因

这个项目是为了解决在 Cloudflare Workers 上使用 React Router 7.4 的挑战，特别是在支持 Workflow 功能方面。详细的技术背景和实现细节可以在这里找到：

[https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow](https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow)

## 许可证

本项目采用 MIT 许可证。
