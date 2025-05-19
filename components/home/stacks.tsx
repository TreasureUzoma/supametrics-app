import Marquee from "react-fast-marquee";
import Image from "next/image";
import { SectionHeader } from "../section-header";

// Array of logos with their paths and alt text
const techLogos = [
  { src: "https://api.iconify.design/logos:html-5.svg", alt: "HTML5 Logo" },
  {
    src: "https://api.iconify.design/logos:typescript-icon.svg",
    alt: "TypeScript Logo",
  },
  { src: "https://api.iconify.design/logos:react.svg", alt: "React Logo" },
  {
    src: "https://api.iconify.design/logos:nextjs-icon.svg",
    alt: "Next.js Logo",
  },
  {
    src: "https://api.iconify.design/logos:nuxt.svg",
    alt: "Nuxt.js Logo",
  },
  {
    src: "https://api.iconify.design/logos:wordpress-icon.svg",
    alt: "WordPress Logo",
  },
  { src: "https://api.iconify.design/logos:shopify.svg", alt: "Shopify Logo" },
  /* { src: "https://api.iconify.design/logos:flutter.svg", alt: "Flutter Logo" },
     {
    src: "https://api.iconify.design/logos:kotlin-icon.svg",
    alt: "Kotlin Logo",
  }, */
  {
    src: "https://api.iconify.design/logos:javascript.svg",
    alt: "Javascript Logo",
  },
  { src: "https://api.iconify.design/logos:vue.svg", alt: "VUE Logo" },
  { src: "https://api.iconify.design/logos:angular.svg", alt: "Angular Logo" },
  { src: "https://api.iconify.design/logos:react.svg", alt: "React Logo" },
  // { src: "https://api.iconify.design/logos:android.svg", alt: "Android Logo" },
];

export const Stacks = () => {
  return (
    <section className="flex_center">
      <div className="my-13 py-5 fixed_width">
        <SectionHeader words="It works with your favourite tech stack!" />
        <p className="text-sm md:text-[1.28rem] text-center mb-7 mt-2 text-neutral-600 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold text-center">
          Whatever your team stack is, supametrics supports it :)
        </p>
        <div className="relative mt-6">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

          {/* Marquee */}
          <Marquee gradient={false}>
            {techLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                width={70}
                height={70}
                alt={logo.alt}
                className="mx-[3.6rem] md:mx-[4rem] mt-7 rounded-md grayscale"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
