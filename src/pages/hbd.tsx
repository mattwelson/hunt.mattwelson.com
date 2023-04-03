import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { FaBirthdayCake } from "react-icons/fa";

// Drinks by Boots
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="font-bond text-primary text-5xl">Happy Birthday!</h1>
      <p className="text-secondary text-xl">Lots of love from Addie and Me!</p>
      <div className="grid justify-center">
        <FaBirthdayCake className="text-secondary text-8xl" />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html data-theme="cupcake" />
      <title>Happy Birthday!</title>
    </>
  );
};
