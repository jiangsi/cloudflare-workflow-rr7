import type { MetaFunction, LoaderFunctionArgs } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};


export async function loader({ context }: LoaderFunctionArgs) {
  const { env } = context.cloudflare as { env: Env };
  // console.log(context.cloudflare);

  console.log(env);
  return {
    message: "Hello, world!",
  };
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>
        react router  7.4 
        with @cloudflare/vite-plugin 0.1.13
        </h1>
        
    </div>
  );
}
