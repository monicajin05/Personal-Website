import TagPill from "../components/TagPill";

const technicalInterests = [
  "Game development", "WebGL / real-time graphics", "Creative coding",
  "UI programming", "Machine learning", "3D modeling",
];

const artisticInterests = [
  "Texture & level design", "2D illustration", "Escape room design",
  "Storytelling through games", "Surreal / horror aesthetics", "Hand-painted art",
];

export default function About() {
  return (
    <div className="min-h-screen pb-32">

      {/* Colorful banner */}
      <div className="relative overflow-hidden pt-28 pb-16 px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--sky)" }} />
          <div className="absolute top-8 -left-24 w-80 h-80 rounded-full opacity-15 blur-3xl bg-panel" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full opacity-15 blur-3xl bg-second" />
        </div>
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            {["#5457CF", "#81C9DF", "#F9B8A4", "#E39696"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-2 text-xs tracking-[0.16em] uppercase text-muted-fg font-medium">About</span>
          </div>
          <h1
            className="text-[clamp(3rem,8vw,6rem)] font-display font-light leading-[0.92] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-accent">Monica</span> <em className="italic text-second">Jin.</em>
          </h1>
          <p className="mt-4 text-base text-muted-fg max-w-sm leading-relaxed">
            CS + Art & Design junior · NC State
          </p>
        </div>
      </div>

      {/* Four-color stripe */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
        <div className="flex h-1 rounded-full overflow-hidden">
          <div className="flex-1" style={{ background: "#5457CF" }} />
          <div className="flex-1" style={{ background: "#81C9DF" }} />
          <div className="flex-1" style={{ background: "#F9B8A4" }} />
          <div className="flex-1" style={{ background: "#E39696" }} />
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">

          {/* Photo + sidebar */}
          <div>
            <div className="sticky top-24">
              {/* Portrait with gradient border accent */}
              <div className="relative mb-6">
                <div
                  className="absolute -inset-1 rounded-sm"
                  style={{ background: "linear-gradient(135deg, #5457CF, #81C9DF, #F9B8A4, #E39696)" }}
                />
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&auto=format"
                    alt="Portrait of Monica Jin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Status card */}
              <div className="rounded-xl p-4 border border-border mb-4 bg-muted">
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2" style={{ color: "var(--sky)" }}>Currently</p>
                <p className="text-sm text-foreground font-medium">Junior, CS + Art & Design</p>
                <p className="text-sm text-muted-fg mt-0.5">
                  Working on{" "}
                  <em className="italic text-second" style={{ fontFamily: "var(--font-display)" }}>Slimed: Rebirth</em>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/monicajin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-fg transition-colors duration-200"
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#5457CF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-fg)")}
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/monicajin05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-fg transition-colors duration-200"
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sky)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-fg)")}
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div>
            <div className="space-y-5 text-base text-foreground/80 leading-relaxed mb-14">
              <p>
                I'm a junior at{" "}
                <strong className="text-foreground font-medium">North Carolina State University</strong>
                {" "}studying Computer Science and Art & Design, combining programming, art, and storytelling to create games and interactive experiences.
              </p>
              <p>
                My work lives at the intersection of technical craft and visual design. Whether I'm writing
                a custom WebGL graphics pipeline from scratch or painting hand-crafted textures for a surreal
                shooter, I care equally about how something works and how it feels to experience.
              </p>
              <p>
                I've built skills throughout college in game design, 2D/3D art, software development, and
                machine learning — taking on roles from lead artist to programmer depending on what the
                project needs.
              </p>
              <p>
                Right now I'm building{" "}
                <em className="italic text-second" style={{ fontFamily: "var(--font-display)" }}>Slimed: Rebirth</em>
                {" "}— an escape room game mixing 2D and 3D art — plus a personal side project.
              </p>
            </div>

            <div className="space-y-10">
              {/* Technical interests */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
                    Technical interests
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalInterests.map((item) => (
                    <TagPill key={item} label={item} />
                  ))}
                </div>
              </div>

              {/* Artistic interests */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-second" />
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-second">
                    Artistic interests
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {artisticInterests.map((item) => (
                    <TagPill key={item} label={item} />
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-muted-fg mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/monicajin05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-85 bg-panel text-panel-fg"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/monicajin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
                    style={{ background: "var(--sky)", color: "#1C1D4A" }}
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
