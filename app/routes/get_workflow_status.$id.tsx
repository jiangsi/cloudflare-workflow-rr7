import  type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

export async function loader({ context, params }: LoaderFunctionArgs) {
  const {env} = context.cloudflare as { env: Env };

  const {id} = params;
  if (id) {
    const workflow = await env.MY_WORKFLOW.get(id);
    const workflowStatus = await workflow.status();

    console.log(workflow.id);  
    console.log(workflowStatus);


    return {
      message: "Hello, world!",
      workflowid: workflow.id,
      status: workflowStatus.status,
    };
  }else{
    return {
      message: "Hello, world!",
      workflowid: "not found",
      status: "not found",
    };
  }

}

export default function Create() {
  const { workflowid, status} = useLoaderData<typeof loader>();

  return <div>workflow {workflowid} 's status is : {status}</div>;
}
