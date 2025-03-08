# React Router 7.3 with Cloudflare Workers


This is an experimental project integrating React Router 7.3 with Cloudflare Workers using the `@cloudflare/vite-plugin`. The goal is to deploy a React application on Cloudflare Workers for enhanced performance and scalability.

[中文版](README-zh.md)

## online demo
[react-router-app-tet.jiangsi.workers.dev](https://react-router-app-tet.jiangsi.workers.dev)

## Features

- TypeScript for type safety and improved developer experience
- React Router 7.3 for client-side routing
- Cloudflare Workers for serverless deployment
- Vite as the build tool and development server
- `@cloudflare/vite-plugin` for seamless integration with Cloudflare Workers

## Project Structure

- `app/`: Contains the React application code
  - `routes/`: React Router routes
- `workers/`: Cloudflare Worker scripts
- `tsconfig.json`: TypeScript configuration for the project
- `tsconfig.node.json`: TypeScript configuration for Node.js
- `tsconfig.cloudflare.json`: TypeScript configuration for Cloudflare Workers
- `vite.config.ts`: Vite configuration file

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Build for production: `npm run build` or `yarn build`
5. Deploy to Cloudflare Workers: Follow the Cloudflare Workers deployment guide

## backgroud
[https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow](https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow)


Background:
My most commonly used tech stack is Remix + Cloudflare Workers.

Remix, as a full-stack framework, is straightforward to use, performs excellently, and doesn’t involve too much "magic."

Cloudflare, which I like to call the "Cyber Bodhisattva," is something I’ve recommended many times.

This time, I wanted to experiment with Cloudflare Workflows and further explore Cloudflare’s Agents.

After writing a test demo and preparing to implement it in a real project, I discovered that this tech stack doesn’t support it.

Reasons:
Remix + Cloudflare’s Local Dev Runtime:

Remix’s local development runtime relies on Miniflare, which is included in the Wrangler client. The build command remix vite:build also depends on Miniflare. However, Miniflare does not support the [[workflow]] tag in wrangler.toml.

Miniflare + Remix Proxy Limitation:

The cloudflareDevProxyVitePlugin in miniflare + remix-run/dev can proxy common Wrangler functionalities, but it doesn’t support the latest Workflows. During the build process, it throws an error:

text


```Worker “workflows:workflows-starter”'s binding “USER_WORKFLOW” refers to service “core:user:” with a named entrypoint “MyWorkflow”, but “core:user:” has no such named entrypoint.
MiniflareCoreError [ERR_RUNTIME_FAILURE]: The Workers runtime failed to start. There is likely additional logging output above.
at Miniflare2.#assembleAndUpdateConfig (/home/code/cf/aiedgeblog/node_modules/miniflare/src/index.ts:1404:10)
at processTicksAndRejections (node:internal/process/task_queues:105:5)
at Mutex.runWith (/home/code/cf/aiedgeblog/node_modules/miniflare/src/workers/shared/sync.ts:66:45)
at Miniflare2.#waitForReady (/home/code/cf/aiedgeblog/node_modules/miniflare/src/index.ts:1486:3)
at Miniflare2._getProxyClient (/home/code/cf/aiedgeblog/node_modules/miniflare/src/index.ts:1692:3)
at Miniflare2.getBindings (/home/code/cf/aiedgeblog/node_modules/miniflare/src/index.ts:1715:23)
at getPlatformProxy (/home/code/cf/aiedgeblog/node_modules/wrangler/wrangler-dist/cli.js:180408:20)
at configureServer (/home/code/cf/aiedgeblog/node_modules/@remix-run/dev/dist/vite/cloudflare-proxy-plugin.js:55:11)
at _createServer (file:///home/code/cf/aiedgeblog/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:63080:20)
at configResolved (/home/code/cf/aiedgeblog/node_modules/@remix-run/dev/dist/vite/plugin.js:768:27)
{ code: ‘ERR_RUNTIME_FAILURE’, cause: undefined }
Remix and React Router Evolution:```

The Remix team is actively iterating on React Router, integrating it with the framework’s library. The latest version, React Router 7.3.0, has essentially ported all of Remix’s features. They don’t seem to have time to revisit the Remix CLI (new commands are react-router build and react-router dev).

Cloudflare’s New Runtime:

The latest Wrangler 3.0 client no longer uses Miniflare as its runtime; it now uses Workerd, which offers 100% compatibility with production Cloudflare Workers. Cloudflare also provides the @cloudflare/vite-plugin package, which integrates seamlessly with Vite. The latest demos for Agents and Workflows use this package.

Lack of Compatible Templates:

There’s no existing template that combines all the above packages effectively.

My Attempt at a New Template:
I decided to create my own combination. The current setup is:

Tech Stack: React Router 7.3 + @cloudflare/vite-plugin
Local Development: Handled via Vite
react-router dev supports hot reloading and access to Cloudflare resources (e.g., env, KV).
Deployment:
npm run build && wrangler deploy --config=wrangler.prod.toml
Configuration:
Two config files: wrangler.prod.toml (for production) and wrangler.toml (for local development).
Not Perfect Yet:
This combination isn’t flawless. If either React Router or Cloudflare makes slight improvements, it could become ideal. Current issues:

Request Handler in React Router:

The handler that prepares to handle Cloudflare requests uses virtual:react-router/server-build:


```
const requestHandler = createRequestHandler(
  // @ts-expect-error
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);```
This works fine with react-router dev and react-router build, but wrangler deploy doesn’t support it. Since both rely on wrangler.toml, I’ve worked around this by using wrangler.toml for local development and pointing to the built files for production deployment. This resolves the issue for now.

Looking Ahead:
I’ll keep an eye on future developments. The local template I created is available here:

[https://github.com/jiangsi/vite-plugin-cloudflare-template](https://github.com/jiangsi/vite-plugin-cloudflare-template)

With this setup, @cloudflare/vite-plugin now supports Workflows successfully!


## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
