# React Router 7.3 with Cloudflare Workers


This is an experimental project integrating React Router 7.3 with Cloudflare Workers using the `@cloudflare/vite-plugin`. The goal is to deploy a React application on Cloudflare Workers for enhanced performance and scalability.

## online demo
[react-router-app-tet.jiangsi.workers.dev]()

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
[https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow]()

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
