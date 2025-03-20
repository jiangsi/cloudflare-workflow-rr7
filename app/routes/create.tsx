import  type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

export async function loader({ context }: LoaderFunctionArgs) {
  const {env} = context.cloudflare as { env: Env };

  const email = "test@test.com";
  const metadata = {
    name: "test",
  };

  const payload =  {
    params: {
      email,
      metadata,
    },
  }

  const workflow = await env.MY_WORKFLOW.create(payload);
  console.log(workflow);

  return {
    message: "Hello, world!",
    workflowid: workflow.id,
  };
}

export default function Create() {
  const {workflowid} = useLoaderData<typeof loader>();

  return <div>
    Create {workflowid}
    <a href={`/get_workflow_status/${workflowid}`}>get workflow status</a>
    </div>;
}
