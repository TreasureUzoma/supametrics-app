"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  FileText,
  Folder,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FilterDropdown from "@/components/filter";
import { projects } from "../../../data/dummy";

const filterOptions = ["All", "Active", "Disabled"];

export default function Page() {
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Active") return project.active;
    if (filter === "Disabled") return !project.active;
    return true;
  });

  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Overview</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Total Visitors",
              icon: <Users className="h-4 w-4 text-muted-foreground" />,
              value: "8,250",
              subtitle: (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                  +9.8% this week
                </p>
              ),
            },
            {
              title: "Reports",
              icon: <FileText className="h-4 w-4 text-muted-foreground" />,
              value: "18",
              subtitle: (
                <p className="text-xs text-muted-foreground">This week</p>
              ),
            },
            {
              title: "Projects",
              icon: <Folder className="h-4 w-4 text-muted-foreground" />,
              value: "10",
              subtitle: (
                <p className="text-xs text-muted-foreground">All active</p>
              ),
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  {card.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  {card.subtitle}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <div className="flex_between">
          <h2 className="text-lg font-semibold mt-4 mb-2">Your Projects</h2>
          <FilterDropdown
            id="projects"
            multiple={false}
            options={filterOptions}
            onChange={(selected) => setFilter(selected[0] || "All")}
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/projects/id`}
                  className="block hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
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
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        <span>
                          {project.visitors.toLocaleString()} visitors
                        </span>
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
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex_center h-[15rem]">
            <p className="text-sm text-muted-foreground mt-4">
              No projects match your current filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
