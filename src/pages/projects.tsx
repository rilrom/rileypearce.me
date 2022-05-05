// Types
import type { NextPage } from "next";

// Components
import Layout from "components/Layout";

const Projects: NextPage = () => {
  return (
    <>
      <h1 className="font-medium text-heading text-3xl md:text-5xl lg:text-6xl leading-[2.5rem] md:leading-[4rem] lg:leading-[5rem] order-last md:order-first mt-8 md:mt-0">
        Projects
      </h1>
      <article className="prose max-w-none mt-8">
        <p>Coming soon</p>
      </article>
    </>
  );
};

// @ts-ignore
Projects.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Projects;
