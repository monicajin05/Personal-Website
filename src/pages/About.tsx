import SectionHeader from "../components/SectionHeader";
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
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24">

        {/* Photo column */}
        <div>
          <div className="sticky top-24">
            <div className="overflow-hidden rounded-sm aspect-[3/4] bg-muted mb-6">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&auto=format"
                alt="Portrait of Monica Jin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs tracking-widest uppercase text-muted-fg">Currently</p>
              <p className="text-sm text-foreground">Junior, CS + Art & Design</p>
              <p className="text-sm text-foreground">Working on Slimed: Rebirth</p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-fg hover:text-accent transition-colors duration-200">
                LinkedIn →
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-fg hover:text-accent transition-colors duration-200">
                GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Bio column */}
        <div>
          <SectionHeader label="About" title="Monica Jin" className="mb-8" />

          <div className="space-y-5 text-base text-foreground/80 leading-relaxed mb-14">
            <p>
              I'm a junior studying{" "}
              <strong className="text-foreground font-medium">Computer Science and Art & Design</strong>
              , combining programming, art, and storytelling to create games and interactive experiences.
            </p>
            <p>
              My work lives at the intersection of technical craft and visual design. Whether I'm writing
              a custom WebGL graphics pipeline from scratch or painting hand-crafted textures for a surreal
              shooter, I care equally about how something works and how it feels to experience.
            </p>
            <p>
              I've shipped games on itch.io as both a solo developer and as part of a team — taking on roles
              from lead programmer to texture artist depending on what the project needs. I'm drawn to
              projects where the technical and artistic decisions are inseparable.
            </p>
            <p>
              Right now I'm building{" "}
              <em className="italic" style={{ fontFamily: "var(--font-display)", color: "#D4527A" }}>Slimed: Rebirth</em>
              {" "}— an escape room game mixing 2D and 3D art — and working on a personal side project
              exploring machine learning applied to visual generation.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase mb-5" style={{ color: "#4A7C64" }}>
                Technical interests
              </p>
              <div className="flex flex-wrap gap-2">
                {technicalInterests.map((item) => (
                  <TagPill key={item} label={item} />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase mb-5" style={{ color: "#4A7C64" }}>
                Artistic interests
              </p>
              <div className="flex flex-wrap gap-2">
                {artisticInterests.map((item) => (
                  <TagPill key={item} label={item} />
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs tracking-widest uppercase text-muted-fg mb-4">Projects available on</p>
              <div className="flex gap-4">
                <a href="https://itch.io" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200">
                  itch.io →
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200">
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
