"use client";

import {
  ShieldCheck,
  Code2,
  Activity,
  MousePointerClick,
  Zap,
} from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { SectionHeader } from "../section-header";

export function PrivacyFeatures() {
  return (
    <section className="my-[3rem] flex_center">
      <div className="fixed_width">
        <SectionHeader words="Analytics That Respects Both Privacy & Insights" />
        <p className="text-sm md:text-[1.28rem] text-center mb-7 mt-2 text-neutral-600 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold text-center">
          Get powerful analytics without compromising user privacy or dealing
          with cookie consent banners
        </p>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={
              <ShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Privacy-First Design"
            description="No cookies, no personal data collection, fully GDPR compliant."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={
              <Code2 className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Open Source"
            description="100% open source codebase. You have complete control and transparency."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={
              <Activity className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Real-Time Insights"
            description="See who's on your site right now and how they're interacting with your content, all in real time."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={
              <MousePointerClick className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Custom Events"
            description="Track conversions, clicks, and user journeys with custom event tracking that respects privacy."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Zap className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Performance Optimized"
            description="Lightweight script that won't slow down your site. Under 5kb and loads asynchronously."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`py-6 min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="text-sm/[1.125rem] text-neutral-600 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
