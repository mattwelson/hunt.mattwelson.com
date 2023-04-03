import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { Clue } from "../components/clue";

// Chocolate in pantry
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="font-bond text-primary text-5xl">Are you ready?</h1>
      <p className="text-secondary text-xl">For your first clue:</p>
      <progress
        className="progress progress-primary w-56 justify-self-center"
        value="25"
        max="100"
      ></progress>
      <Clue
        clue="I have a home, but I live on the bench instead"
        secondClue="If you tried to put me away, you'd find a tasty treat"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html data-theme="cupcake" />
      <title>Clue One</title>
    </>
  );
};
