"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tools?: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  bullets,
  tools,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary text-lg font-medium">{company}</p>
          <p className="text-base text-muted-foreground">
            {startDate} - {endDate} | {location}
          </p>
        </div>
        <button
          className={`p-1 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          expanded ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
