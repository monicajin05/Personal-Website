import { Link } from "react-router";
import { projects } from "../data/projects";

function ProjectItem({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Status badge */}
        {project.status === "in-development" && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-sm text-xs font-medium tracking-wide bg-second text-second-fg">
              In Development
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
        {/* Hover badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent text-accent-fg">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.5 6h3M6 4.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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
      <div className="relative overflow-hidden pt-40 pb-20 px-6 md:px-12">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-20 w-[32rem] h-[32rem] rounded-full opacity-25 blur-3xl bg-accent" />
          <div className="absolute top-8 left-1/3 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl bg-panel" />
          <div className="absolute -bottom-24 right-10 w-[30rem] h-[30rem] rounded-full opacity-20 blur-3xl bg-second" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "var(--sky)" }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            {["#5457CF", "#81C9DF", "#F9B8A4", "#E39696"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-2 text-xs tracking-[0.18em] uppercase text-muted-fg font-medium">
              Monica Jin · CS + Art & Design
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1
              className="text-[clamp(3rem,8vw,7rem)] font-display font-light leading-[0.95] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-accent">Software</span> that
              <br />
              thinks <em className="italic text-second">visually.</em>
            </h1>
            <div className="md:text-right md:pb-2 max-w-xs md:ml-auto">
              <p className="text-base md:text-lg text-muted-fg leading-relaxed">
                Games, graphics, and tools — built where code meets craft.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Four-color stripe */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex h-0.5 rounded-full overflow-hidden mb-4">
          <div className="flex-1" style={{ background: "#5457CF" }} />
          <div className="flex-1" style={{ background: "#81C9DF" }} />
          <div className="flex-1" style={{ background: "#F9B8A4" }} />
          <div className="flex-1" style={{ background: "#E39696" }} />
        </div>
      </div>

      {/* Slim divider */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-[0.14em] uppercase text-accent font-medium">Selected Work</span>
          <span className="text-xs text-muted-fg">{projects.length} projects · 2023 – 2025</span>
        </div>
      </div>

      {/* Two-column gallery */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {/* Left column: even-indexed projects */}
          <div className="flex flex-col gap-14">
            {projects.filter((_, i) => i % 2 === 0).map((p) => (
              <ProjectItem key={p.slug} project={p} />
            ))}
          </div>
          {/* Right column: odd-indexed, offset down */}
          <div className="flex flex-col gap-14 md:pt-24">
            {projects.filter((_, i) => i % 2 === 1).map((p) => (
              <ProjectItem key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
