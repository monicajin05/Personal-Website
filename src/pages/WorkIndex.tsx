import { Link } from "react-router";
import { projects } from "../data/projects";

function ProjectItem({ project, aspectRatio = "4/3" }: { project: (typeof projects)[0]; aspectRatio?: string }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      {/* Image */}
      <div
        className="relative overflow-hidden bg-muted"
        style={{ aspectRatio }}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Status badge */}
        {project.status === "in-development" && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-sm text-xs font-medium tracking-wide" style={{ background: "#4A7C64", color: "#fff" }}>
              In Development
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
        {/* Hover badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-white"
            style={{ background: "#D4527A" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.2" />
              <path d="M4.5 6h3M6 4.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            View Case Study
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3 flex items-start justify-between gap-4">
        <p
          className="text-base font-display font-light text-foreground group-hover:text-accent transition-colors duration-200 leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.hook}
        </p>
        <p className="shrink-0 text-[10px] tracking-[0.14em] uppercase text-muted-fg whitespace-nowrap pt-0.5">
          {project.title}
          {" · "}
          {project.year}
        </p>
      </div>
    </Link>
  );
}

export default function WorkIndex() {
  return (
    <div className="min-h-screen pb-32">
      {/* Banner */}
      <div className="relative overflow-hidden pt-28 pb-16 px-6 md:px-12">
        {/* Rose diagonal panel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "#E8C5D2", clipPath: "polygon(0 0, 52% 0, 38% 100%, 0 100%)" }}
        />
        <div className="relative max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1
            className="text-[clamp(3rem,8vw,7rem)] font-display font-light leading-[0.92] tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#1A0D12" }}
          >
            Monica Jin.
          </h1>
          <div className="md:text-right md:pb-2 max-w-xs">
            <p className="text-base md:text-lg font-light text-foreground leading-snug">
              Software that thinks{" "}
              <em className="italic" style={{ fontFamily: "var(--font-display)", color: "#D4527A" }}>visually</em>
              {" "}— code and craft as one.
            </p>
            <p className="text-xs tracking-[0.14em] uppercase mt-3" style={{ color: "#4A7C64" }}>
              CS + Art & Design · RISD '27
            </p>
          </div>
        </div>
      </div>

      {/* Slim divider */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12">
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs tracking-[0.14em] uppercase" style={{ color: "#4A7C64" }}>Selected Work</span>
          <span className="text-xs text-muted-fg">2024 – 2025</span>
        </div>
      </div>

      {/* Two-column gallery */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {/* Left column: even-indexed projects */}
          <div className="flex flex-col gap-14">
            {projects.filter((_, i) => i % 2 === 0).map((p) => (
              <ProjectItem key={p.slug} project={p} aspectRatio="4/3" />
            ))}
          </div>
          {/* Right column: odd-indexed, offset down */}
          <div className="flex flex-col gap-14 md:pt-24">
            {projects.filter((_, i) => i % 2 === 1).map((p) => (
              <ProjectItem key={p.slug} project={p} aspectRatio="5/4" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
