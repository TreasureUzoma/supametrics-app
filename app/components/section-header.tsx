"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

export function SectionHeader({ words = "Some  Title" }) {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
