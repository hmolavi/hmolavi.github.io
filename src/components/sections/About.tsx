"use client";

import Image from "next/image";
import { Github, Linkedin, MapPin, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import resumeData from "@/data/resume.json";

function ObfuscatedEmail() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = "hmolavi";
    const domain = "uwaterloo.ca";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="text-lg text-primary hover:underline cursor-pointer"
    >
      {"hmolavi"}
      <span className="text-muted-foreground"> (at) </span>
      {"uwaterloo"}
      <span className="text-muted-foreground"> (dot) </span>
      {"ca"}
    </a>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Text content */}
            <div className="flex-1">
              <p className="text-primary text-lg font-medium mb-2">Hi, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                Hossein Molavi
              </h1>
              <p className="text-2xl text-muted-foreground mb-2">
                Computer Engineering Student @ UWaterloo
              </p>
              <p className="flex items-center gap-1.5 text-base text-muted-foreground mb-6">
                <MapPin className="w-5 h-5" /> Waterloo, ON
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Building at the boundary between silicon and software, from bare-metal firmware and wireless protocols to cloud-connected IoT systems. Currently in my final year of Computer Engineering at the University of Waterloo.
              </p>
              <p className="text-muted-foreground mb-8">
                <ObfuscatedEmail />
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/hmolavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 font-medium transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/hmolavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 font-medium transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white text-base font-medium hover:bg-primary-dark transition-colors"
                >
                  <FileText className="w-5 h-5" /> Resume
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 group/photo relative">
              <div className="absolute -inset-3 rounded-2xl bg-primary/0 group-hover/photo:bg-primary/30 blur-xl transition-all duration-500" />
              <div className="w-64 h-72 md:w-72 md:h-80 relative rounded-2xl overflow-hidden border-2 border-border group-hover/photo:border-primary/50 transition-colors duration-500 bg-background">
                <Image
                  src="/headshot.webp"
                  alt="Hossein Molavi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
          <SectionHeading title="Skills" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(resumeData.skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-base font-semibold uppercase tracking-wider text-primary mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
