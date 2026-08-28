import { useEffect, useState } from "react";
import TagPill from "../components/TagPill";
import { experiences, type Experience } from "../data/experiences";

const technicalInterests = [
  "Game development", "WebGL / real-time graphics", "Creative coding",
  "UI programming", "Machine learning", "3D modeling",
];

const artisticInterests = [
  "Texture & level design", "2D illustration", "Escape room design",
  "Storytelling through games", "Surreal / horror aesthetics", "Hand-painted art",
];

function ExperienceLightbox({
  experience,
  index,
  onIndexChange,
  onClose,
}: {
  experience: Experience;
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const photos = experience.photos;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + photos.length) % photos.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length, onClose, onIndexChange]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-16"
      style={{ background: "rgba(13,14,32,0.92)" }}
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="relative overflow-hidden rounded-sm bg-muted">
          <img
            src={photos[index].src}
            alt={photos[index].caption}
            className="w-full max-h-[78vh] object-contain"
          />
          {/* Half-transparent caption */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-black/50 backdrop-blur-sm">
            <p className="text-white text-sm leading-relaxed">{photos[index].caption}</p>
          </div>
          {photos.length > 1 && (
            <>
              <button
                onClick={() => onIndexChange((index - 1 + photos.length) % photos.length)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-200"
              >
                ←
              </button>
              <button
                onClick={() => onIndexChange((index + 1) % photos.length)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-200"
              >
                →
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p
            className="text-white font-display font-light text-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {experience.title}
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-white/40 text-xs tracking-widest uppercase">
              {index + 1} / {photos.length}
            </span>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors duration-200 text-xs tracking-widest uppercase"
            >
              Close ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ experience, onOpen }: { experience: Experience; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-sm bg-muted text-left cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={experience.cover}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent text-accent-fg">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.5 6h3M6 4.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {experience.title}
          </span>
        </div>
      </div>
    </button>
  );
}

export default function About() {
  const [selected, setSelected] = useState<{ experience: Experience; index: number } | null>(null);

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
                    src="/images/about/monica-portrait.jpg"
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

      {/* What have I been up to? */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-24">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-medium tracking-[0.16em] uppercase text-second">Beyond the portfolio</span>
        </div>
        <h2
          className="text-[clamp(2rem,5vw,3.5rem)] font-display font-light leading-[0.95] tracking-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What have I been up to?
        </h2>
        <p className="text-muted-fg text-base max-w-xl leading-relaxed mb-10">
          I look for experiences rather than accomplishments. Click a card for the full story behind it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onOpen={() => setSelected({ experience, index: 0 })}
            />
          ))}
        </div>
      </div>

      {/* Experience lightbox */}
      {selected && (
        <ExperienceLightbox
          experience={selected.experience}
          index={selected.index}
          onIndexChange={(i) => setSelected({ experience: selected.experience, index: i })}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
