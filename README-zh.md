# 在 Cloudflare Workers 上使用 React Router 7.3

这是一个试验性项目，使用 `@cloudflare/vite-plugin` 将 React Router 7.3 与 Cloudflare Workers 集成。目标是在 Cloudflare Workers 上部署 React 应用程序，以提高性能和可扩展性。

## 线上demo
[react-router-app-tet.jiangsi.workers.dev]()

## 特性

- 使用 TypeScript 提高类型安全性和开发者体验
- 使用 React Router 7.3 进行客户端路由
- 使用 Cloudflare Workers 进行无服务器部署
- 使用 Vite 作为构建工具和开发服务器
- 使用 `@cloudflare/vite-plugin` 与 Cloudflare Workers 无缝集成

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
4. 生产构建: `npm run build` 或 `yarn build`
5. 部署到 Cloudflare Workers: 请参考 Cloudflare Workers 部署指南

## 贡献

欢迎贡献！如果您有任何建议或改进，请提出 issue 或提交 pull request。

## 背景和原因看这里
[https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow]()

## 许可证

本项目采用 MIT 许可证。
