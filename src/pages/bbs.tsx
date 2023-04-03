import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/layout";
import { Clue } from "../components/clue";

// Drinks by Boots
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 className="font-bond text-primary text-5xl">Great job!</h1>
      <p className="text-secondary text-xl">Final clue:</p>
      <Clue
        clue="Don't forget me when you head out on an adventure"
        secondClue="You wouldn't want to freeze at night"
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
