import { createRequestHandler } from "react-router";
// <docs-tag name="full-workflow-example">
import { WorkflowEntrypoint, WorkflowStep, WorkflowEvent } from 'cloudflare:workers';

declare global {
  interface CloudflareEnvironment extends Env {}
}

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnvironment;
      ctx: ExecutionContext;
    };
  }
}

type Env = {
	MY_WORKFLOW: Workflow;
};

type Params = {
	email: string;
	metadata: Record<string, string>;
};
export class MyWorkflow extends WorkflowEntrypoint<Env, Params> {
	async run(event: WorkflowEvent<Params>, step: WorkflowStep) {
		const printsome = await step.do('print some', async () => {
      const payload = event.payload;
			console.log('print some');
      console.log(payload);
			return 'some';
		});
	}
}


const requestHandler = createRequestHandler(
  // @ts-expect-error
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<CloudflareEnvironment>;
