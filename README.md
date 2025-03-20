# Using React Router 7.4 with Cloudflare Workers

This is an experimental project that integrates React Router 7.4 with Cloudflare Workers using `@cloudflare/vite-plugin`. The goal is to deploy a workflow-enabled application on Cloudflare Workers to improve performance and scalability.

Testing
/create - Create a workflow
/get_workflow_status/<workflow_id> - Check workflow status

## Background

On the Cloudflare Workers platform, we often need to handle long-running tasks. Traditional Workers have execution time limits that restrict their ability to handle complex tasks. Cloudflare introduced the Workflow feature to solve this problem, allowing us to create long-running tasks without being affected by Workers' execution time limits.

## Problems

During development, we encountered the following specific issues:

1. React Router 7.4 Integration with Cloudflare Workers
   - Routes work correctly in development environment with `npm run dev`
   - But route requests fail to respond properly in Cloudflare Workers environment
   - Need to ensure all route requests are handled correctly, including API and page requests

2. Workflow Feature Integration Challenges
   - Need to handle Workflow creation and status queries
   - Frontend needs to display Workflow execution status in real-time
   - Need to handle error cases during Workflow execution

3. Development and Production Environment Inconsistencies
   - Local development environment uses Vite dev server
   - Production environment uses Cloudflare Workers
   - Need to ensure consistent behavior between environments

4. Build and Deployment Process
   - Need to properly handle static resource building and deployment
   - Need to ensure both API routes and page routes work correctly
   - Need to handle environment variables and configuration

## Solutions

We solved these problems through the following approaches:

1. Used `@cloudflare/vite-plugin@0.1.13` to achieve seamless integration between development and production environments
2. Implemented Workflow creation and status query APIs
3. Optimized route handling using React Router 7.4's new features
4. Implemented elegant state management and error handling

## Online Demo
[cloudflare-workflow-rr7.jiangsi.workers.dev](https://cloudflare-workflow-rr7.jiangsi.workers.dev)

## Features

- TypeScript for enhanced type safety and developer experience
- React Router 7.4 for client-side routing
- Cloudflare Workers for serverless deployment
- Vite 6 as build tool and development server
- `@cloudflare/vite-plugin@0.1.13` for seamless Cloudflare Workers integration
- Support for Cloudflare Workers Workflow feature
- Seamless integration between development and production environments

## Project Structure

- `app/`: Contains React application code
  - `routes/`: React Router routes
- `workers/`: Cloudflare Worker scripts
- `tsconfig.json`: Project TypeScript configuration
- `tsconfig.node.json`: Node.js TypeScript configuration
- `tsconfig.cloudflare.json`: Cloudflare Workers TypeScript configuration
- `vite.config.ts`: Vite configuration file

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: `npm run dev` or `yarn dev`
4. Test locally with Cloudflare Workers: `npm run cfdev`
5. Build for production: `npm run build` or `yarn build`
6. Deploy to Cloudflare Workers: `npm run deploy`

## Development Environment

- Node.js >= 20.0.0
- npm or yarn package manager
- Cloudflare Workers account

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## Background and Motivation

This project aims to solve the challenges of using React Router 7.4 with Cloudflare Workers, particularly in supporting the Workflow feature. Detailed technical background and implementation details can be found here:

[https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow](https://jiangsi.com/blog/remix-cloudflare-how-to-support-workflow)

## License

This project is licensed under the MIT License.
