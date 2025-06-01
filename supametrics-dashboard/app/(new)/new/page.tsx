import { Hero } from "../components/hero";

import { Metadata } from "next";
import { Main } from "./componets/main";

export const metadata: Metadata = {
  title: "New Project - Supametrics",
};

const Page = () => {
  return (
    <>
      <Hero
        title="Let’s Track Something Great"
        subtitle="Set up tracking in seconds — so you can focus on growing smarter."
      />
      <Main />
    </>
  );
};

export default Page;
