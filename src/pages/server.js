import { unstable_getServerSession } from "next-auth";
import Layout from "../components/layout";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home({ session }) {
  return <Layout>Server {JSON.stringify(session)}</Layout>;
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
