"use client";

import { CalendarDays, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

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
      className="inline-flex items-center gap-2 text-lg text-primary hover:underline cursor-pointer"
    >
      <Mail className="w-5 h-5" />
      {"hmolavi"}
      <span className="text-muted-foreground"> (at) </span>
      {"uwaterloo"}
      <span className="text-muted-foreground"> (dot) </span>
      {"ca"}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        <SectionHeading title="Get In Touch" />
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="mb-8">
            <ObfuscatedEmail />
          </div>

          <a
            href="https://calendar.app.google/JTpytHTMsYePoLYJA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white text-lg font-medium hover:bg-primary-dark transition-colors"
          >
            <CalendarDays className="w-5 h-5" /> Book a Meeting
          </a>
        </div>
      </div>
    </section>
  );
}
