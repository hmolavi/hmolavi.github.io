import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  language?: string;
  topics?: string[];
  url: string;
  image?: string;
}

export default function ProjectCard({
  name,
  description,
  language,
  topics,
  url,
  image,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:-translate-y-1"
    >
      {/* Project image */}
      {image && (
        <div className="relative w-full aspect-video bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      {!image && (
        <div className="w-full aspect-video bg-muted flex items-center justify-center">
          <Github className="w-12 h-12 text-muted-foreground/30" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
            {name}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
        </div>
        <p className="text-base text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {language && (
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-primary" />
              {language}
            </span>
          )}
          {topics?.map((topic) => (
            <span
              key={topic}
              className="text-sm px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
