"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import resumeData from "@/data/resume.json";
import projectsMeta from "@/data/projects-meta.json";

const PROJECTS = resumeData.projects.map((project) => {
  const meta = (projectsMeta as Record<string, { url: string; language: string; isHardware: boolean }>)[project.name];
  return {
    name: project.name,
    description: project.bullets.join(" "),
    language: meta?.language || project.tools[0] || "",
    topics: project.tools,
    url: meta?.url || "https://github.com/hmolavi",
    isHardware: meta?.isHardware ?? false,
    image: (project as Record<string, unknown>).image as string | undefined,
  };
});

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "software" | "hardware">("all");

  const filtered = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "hardware") return p.isHardware;
    return !p.isHardware;
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        <SectionHeading title="Projects" />

        {/* Filter tabs */}
        <div className="flex gap-2 mb-8">
          {(["all", "software", "hardware"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === tab
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center">
          Projects auto-update from my resume.
        </p>
      </div>
    </section>
  );
}
