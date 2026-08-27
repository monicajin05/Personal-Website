import { Link } from "react-router";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";

const skills = [
  "React", "TypeScript", "Three.js", "WebGL", "GLSL",
  "Python", "p5.js", "D3.js", "Figma", "Blender",
  "Swift", "SQL", "Supabase", "Git",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero — diagonal split: rose left, cream right */}
      <section className="relative h-screen overflow-hidden">
        {/* Rose panel */}
        <div
          className="absolute inset-0"
          style={{
            background: "#E8C5D2",
            clipPath: "polygon(0 0, 58% 0, 42% 100%, 0 100%)",
          }}
        />

        {/* Left panel content */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-end pb-20 px-8 md:px-16 w-1/2">
          <div>
            <h1
              className="text-[clamp(3.5rem,9vw,8rem)] font-display font-light leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#1A0D12" }}
            >
              Monica
              <br />
              Jin.
            </h1>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-px" style={{ background: "#4A7C64" }} />
              <span
                className="text-xs tracking-[0.18em] uppercase font-medium"
                style={{ color: "#9A7A88" }}
              >
                CS + Art & Design junior · NC State
              </span>
            </div>
          </div>
        </div>

        {/* Right panel content */}
        <div className="absolute right-0 top-0 h-full flex flex-col justify-end pb-20 px-8 md:px-16 w-1/2">
          <div className="max-w-sm ml-auto">
            <p className="text-foreground text-lg md:text-xl leading-relaxed font-light">
              I combine programming, art, and storytelling to make{" "}
              <em
                className="not-italic text-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                games
              </em>{" "}
              and research projects.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                to="/"
                className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                View Work
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-muted-fg hover:text-foreground transition-colors duration-200"
              >
                About me
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-foreground">Scroll</span>
          <div className="w-px h-12 bg-foreground/30 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-accent"
              style={{
                height: "40%",
                animation: "scrollDrop 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes scrollDrop {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(350%); }
          }
        `}</style>
      </section>

      {/* Project Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <SectionHeader label="Selected Work" title="Projects" className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="mt-12 flex justify-end">
          <Link
            to="/"
            className="group flex items-center gap-2 text-sm font-medium text-muted-fg hover:text-foreground transition-colors duration-200"
          >
            All projects
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Skills / Tools */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
            <div className="shrink-0">
              <SectionHeader label="Toolkit" title={"Tools &\nLanguages"} />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center pt-1 md:pt-10">
              {skills.map((skill, i) => (
                <span key={skill} className="flex items-center gap-6">
                  <span className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 cursor-default">
                    {skill}
                  </span>
                  {i < skills.length - 1 && (
                    <span className="text-border select-none">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p
              className="text-3xl md:text-4xl font-display font-light text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's build something
              <br />
              <em className="italic" style={{ color: "#D4527A" }}>together.</em>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/monicajin05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-fg hover:text-accent transition-colors duration-200"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/monicajin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-fg hover:text-accent transition-colors duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
