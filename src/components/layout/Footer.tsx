"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = "hmolavi";
    const domain = "uwaterloo.ca";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hossein Molavi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hmolavi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/hmolavi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={handleEmailClick}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
