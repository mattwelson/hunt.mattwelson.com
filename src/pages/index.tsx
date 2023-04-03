import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="font-bond text-primary text-5xl">Happy Birthday Alice</h1>
      <p className="text-secondary text-xl">You're the best</p>
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
