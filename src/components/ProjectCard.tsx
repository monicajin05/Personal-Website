import { Link } from "react-router";
import type { Project } from "../data/projects";
import TagPill from "./TagPill";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block bg-card border border-border rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-medium tracking-[0.12em] text-white/70 font-mono"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-xl font-display font-medium text-foreground group-hover:text-accent transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h3>
          <span className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-2 group-hover:translate-x-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-foreground">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <p className="text-sm text-muted-fg leading-relaxed">{project.hook}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
