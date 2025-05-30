"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    name: "Eversub",
    url: "eversub.app",
    visitors: 1500,
    trendingUp: true,
    trendingPercent: 12.4,
    active: true,
  },
  {
    name: "Portfolio",
    url: "idolo.dev",
    visitors: 850,
    trendingUp: false,
    trendingPercent: 3.2,
    active: true,
  },
  {
    name: "TalkGPT",
    url: "talkkgpt.com",
    visitors: 430,
    trendingUp: true,
    trendingPercent: 5.1,
    active: true,
  },
  {
    name: "FlyCommerce",
    url: "flycommerce.io",
    visitors: 980,
    trendingUp: true,
    trendingPercent: 7.8,
    active: true,
  },
  {
    name: "Blocked.com",
    url: "whyiblocked.com",
    visitors: 720,
    trendingUp: false,
    trendingPercent: 4.5,
    active: true,
  },
  {
    name: "BlackWears",
    url: "blackwears.com",
    visitors: 1100,
    trendingUp: true,
    trendingPercent: 9.3,
    active: true,
  },
  {
    name: "Ship",
    url: "ship.co.uk",
    visitors: 620,
    trendingUp: false,
    trendingPercent: 2.1,
    active: true,
  },
  {
    name: "Talkgram",
    url: "talkgram.gg",
    visitors: 1050,
    trendingUp: true,
    trendingPercent: 6.7,
    active: true,
  },
  {
    name: "Support Ticket System",
    url: "startup.com",
    visitors: 400,
    trendingUp: false,
    trendingPercent: 1.9,
    active: true,
  },
  {
    name: "Financoo",
    url: "finaco.com",
    visitors: 970,
    trendingUp: true,
    trendingPercent: 11.0,
    active: true,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Overview</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium">
                Total Visitors
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,250</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                +9.8% this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium">Reports</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium">Projects</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10</div>
              <p className="text-xs text-muted-foreground">All active</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Your Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={`/projects/id`}
              className="block"
              tabIndex={0}
            >
              <Card className="hover:shadow-md transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    {project.active && (
                      <span
                        aria-label="Active"
                        title="Active"
                        className="inline-block w-2 h-2 rounded-full bg-green-500 select-none"
                      />
                    )}
                    <p className="truncate" title={project.name}>
                      {project.name}
                    </p>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 truncate">
                    <p className="truncate">{project.url}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-1 inline-flex items-center text-muted-foreground hover:text-primary transition"
                      aria-label={`Visit ${project.name}`}
                      title={`Visit ${project.name}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <span>{project.visitors.toLocaleString()} visitors</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {project.trendingUp ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span>
                      {project.trendingUp ? "+" : "-"}
                      {project.trendingPercent}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
