"use client";

import React from "react";
import { SectionHeader } from "../section-header";
import { CodeBlock } from "@/components/ui/code-block";
import Link from "next/link";

export const IntegrationDemo = () => {
  return (
    <section className="flex_center my-[4rem]">
      <div className="fixed_width">
        <SectionHeader words="Simple to Implement, Powerful to Use" />
        <p className="text-sm md:text-[1.28rem] text-center mb-7 mt-2 text-neutral-600 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold text-center">
          Get your site analytics running in minutes with just a few lines of
          code.
        </p>
        <CodeBlockDemo />

        {/* Step-by-step section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center text-neutral-700 dark:text-neutral-300">
          <div>
            <div className="text-3xl font-bold mb-2 text-primary">1</div>
            <h3 className="text-lg font-semibold mb-1">Install the Package</h3>
            <p className="text-sm">
              Run{" "}
              <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">
                npm install supametrics
              </code>{" "}
              or <code>yarn add supametrics</code>
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold mb-2 text-primary">2</div>
            <h3 className="text-lg font-semibold mb-1">
              Add the Analytics Component
            </h3>
            <p className="text-sm">
              Drop the <code>{`<Analytics client="your-tracking-id" />`}</code>{" "}
              component into your root layout.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold mb-2 text-primary">3</div>
            <h3 className="text-lg font-semibold mb-1">View Insights</h3>
            <p className="text-sm">
              Log in to your Supametrics dashboard to start tracking and
              analyzing user activity.
            </p>
          </div>
        </div>
        <Link
          href="/docs"
          className="my-4 px-6 md:px-7 py-2 md:py-3 bg-white border text-black dark:bg-black text-400 rounded-3xl text-medium dark:text-zinc-500 dark:border-neutral-800 hover:bg-neutral-500 dark:hover:bg-neutral-900 p-2 text-[0.88rem] inline-block"
        >
          Read the documentation
        </Link>
      </div>
    </section>
  );
};

export function CodeBlockDemo() {
  const ReactLanguage = `import { StrictMode } from 'react';
import App from './App.jsx';
import { Analytics } from 'supametrics';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics client="your-tracking-id"/>
    <App />
  </StrictMode>
);
`;

  const CSSLanguage = `import { Analytics } from "supametrics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics client="your-tracking-id"/>
        {children}
      </body>
    </html>
  );
}
`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="jsx"
        filename="DummyComponent.jsx"
        tabs={[
          {
            name: "layout.tsx",
            code: CSSLanguage,
            language: "jsx",
            highlightLines: [1, 7],
          },
          {
            name: "App.jsx",
            code: ReactLanguage,
            language: "jsx",
            highlightLines: [3, 7],
          },
        ]}
      />
    </div>
  );
}
