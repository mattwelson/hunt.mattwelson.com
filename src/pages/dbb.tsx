import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { Clue } from "../components/clue";

// Drinks by Boots
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="font-bond text-primary text-5xl">Nice work!</h1>
      <p className="text-secondary text-xl">Next up:</p>
      <Clue
        clue="The first step in any trip is to put me on"
        secondClue="I'm made for walking, and that's just what I'll do"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html data-theme="cupcake" />
      <title>Clue Two</title>
    </>
  );
};
