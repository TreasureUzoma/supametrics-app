import { Stacks } from "@/components/home/stacks";
import { Hero } from "../components/home/hero";
import { PrivacyFeatures } from "../components/home/privacy-features";
import { IntegrationDemo } from "@/components/home/integration-code";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PrivacyFeatures />
      <Stacks />
      <IntegrationDemo />
      <Testimonials />
      <Cta />
    </>
  );
}
