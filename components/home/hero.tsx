"use client";

import Link from "next/link";
import { Badge } from "./hero-badge";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="h-[50rem] w-full flex_center">
      <div className="w-[99%] md:w-[68%] ">
        <div className="flex justify-center">
          <Badge text="Introducing Public Beta" />
        </div>
        <div className="text-center px-5 text-neutral-500 dark:text-neutral-400 md:px-0">
          {/* Animated Heading */}
          <motion.h1
            className="md:px-12 tracking-[-1px] text-4xl sm:text-5xl font-bold text-black dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Open-source analytics that put{" "}
            <span className="text-main">*you*</span> in control
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-[1.14rem] font-medium z-20 md:text-[1.3rem] mt-8 leading-[1.52rem] md:leading-[2.2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A lightweight, privacy-first alternative to Google Analytics — built
            for self-hosting, GDPR compliance, and full data ownership. No
            cookies, less than 5kb, just insights.
          </motion.p>

          {/* Animated Buttons */}
          <div className="mt-9 font-medium flex flex-col gap-4 md:w-[78%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link
                href="/signup"
                className="z-20 text-[0.89rem] block w-full md:text-[0.96rem] px-6 md:px-7 py-2 md:py-3 bg-black dark:bg-white text-white dark:text-black rounded-3xl hover:bg-neutral-300 dark:hover:bg-neutral-200"
              >
                Start for Free
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link
                href="/docs"
                className="z-20 text-[0.89rem] block w-full md:text-[0.96rem] px-6 md:px-7 py-2 md:py-3 bg-white border text-black dark:bg-black text-400 rounded-3xl dark:text-zinc-500 dark:border-neutral-800 hover:bg-neutral-500 dark:hover:bg-neutral-900"
              >
                Documentation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
