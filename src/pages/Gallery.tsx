import { useState } from "react";

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  url: string;
  aspect: "portrait" | "landscape" | "square";
}

// ── Swap these out with your real artwork images ──────────────
const artworks: Artwork[] = [
  {
    id: "1",
    title: "Abstract Study I",
    medium: "Digital painting",
    year: "2024",
    url: "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?w=800&h=1200&fit=crop&auto=format",
    aspect: "portrait",
  },
  {
    id: "2",
    title: "Color Field",
    medium: "Digital",
    year: "2024",
    url: "https://images.unsplash.com/photo-1764345933704-2ba927b28ee9?w=1200&h=800&fit=crop&auto=format",
    aspect: "landscape",
  },
  {
    id: "3",
    title: "Character Concept",
    medium: "Illustration",
    year: "2023",
    url: "https://images.unsplash.com/photo-1783672104795-fd2980251576?w=800&h=1200&fit=crop&auto=format",
    aspect: "portrait",
  },
  {
    id: "4",
    title: "Swirl Study",
    medium: "Digital painting",
    year: "2024",
    url: "https://images.unsplash.com/photo-1763931504284-b1e9743b1abb?w=1200&h=800&fit=crop&auto=format",
    aspect: "landscape",
  },
  {
    id: "5",
    title: "Figure Study",
    medium: "Illustration",
    year: "2023",
    url: "https://images.unsplash.com/photo-1783672052110-9b753ab3ff77?w=800&h=1200&fit=crop&auto=format",
    aspect: "portrait",
  },
  {
    id: "6",
    title: "Abstract II",
    medium: "Digital",
    year: "2024",
    url: "https://images.unsplash.com/photo-1759260583429-9644b11e2808?w=800&h=1200&fit=crop&auto=format",
    aspect: "portrait",
  },
  {
    id: "7",
    title: "Guard Study",
    medium: "Character design",
    year: "2023",
    url: "https://images.unsplash.com/photo-1783672087589-82e069ffa28d?w=800&h=1200&fit=crop&auto=format",
    aspect: "portrait",
  },
  {
    id: "8",
    title: "Pigment Study",
    medium: "Digital painting",
    year: "2024",
    url: "https://images.unsplash.com/photo-1580566176138-daa588058b59?w=1200&h=800&fit=crop&auto=format",
    aspect: "landscape",
  },
];
// ─────────────────────────────────────────────────────────────

function Lightbox({ art, onClose }: { art: Artwork; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-16"
      style={{ background: "rgba(26,13,18,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={art.url}
          alt={art.title}
          className="w-full max-h-[78vh] object-contain rounded-sm"
        />
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-white font-display font-light text-lg" style={{ fontFamily: "var(--font-display)" }}>
              {art.title}
            </p>
            <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
              {art.medium} · {art.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors duration-200 text-xs tracking-widest uppercase"
          >
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<Artwork | null>(null);

  // Split into two columns for masonry feel
  const leftCol = artworks.filter((_, i) => i % 2 === 0);
  const rightCol = artworks.filter((_, i) => i % 2 === 1);

  return (
    <div className="min-h-screen pb-32">
      {/* Rose accent bar */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #D4527A 0%, #E8C5D2 60%, transparent 100%)" }} />

      {/* Header + blurb */}
      <div className="pt-20 pb-0 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between border-b border-border pb-5 mb-14">
          <span className="font-display font-light text-lg" style={{ fontFamily: "var(--font-display)", color: "#D4527A" }}>
            Art Gallery
          </span>
          <span className="text-xs tracking-[0.14em] uppercase" style={{ color: "#4A7C64" }}>Monica Jin</span>
        </div>

        {/* Blurb */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 mb-20">
          <div>
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-display font-light leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Art as a
              <br />
              <em className="italic" style={{ color: "#D4527A" }}>way of thinking.</em>
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-5 text-base text-foreground/75 leading-relaxed">
            <p>
              I've always loved art and enjoyed programming, so I combined the two — plus a love of storytelling —
              to make games and research projects. This gallery is meant to hold the 2D/3D work that sits alongside
              those projects: pixel art, environment art, textures, and design-doc images.
            </p>
            <p>
              Design-doc image titles I can name from the content reference (no files attached yet): Slimed: Rebirth
              room/puzzle/sprite sheets; Slimed: Awakening layout, enemy/boss animation, promo; Slimed: Origins ending
              cards and Twine flow; Crazy Old Man's Trip textures and map prototypes; Battle Zone 3D tank/spaceship
              models and shaders; Catacombs dialogue and plot docs; Tapioca Tails environment and customer art; Encore!
              environment iterations and level maps; ceramic glaze samples.
            </p>
            <p>
              Images below are still Unsplash placeholders. I need your re-exported files (and titles, medium, year
              per piece) before this page can show real work.
            </p>
          </div>
        </div>
      </div>

      {/* Masonry gallery */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {/* Left column */}
          <div className="flex flex-col gap-3 md:gap-4">
            {leftCol.map((art) => (
              <button
                key={art.id}
                className="group relative overflow-hidden rounded-sm bg-muted text-left w-full cursor-pointer"
                onClick={() => setSelected(art)}
              >
                <img
                  src={art.url}
                  alt={art.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ aspectRatio: art.aspect === "portrait" ? "3/4" : art.aspect === "landscape" ? "4/3" : "1/1" }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white font-display font-light text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {art.title}
                    </p>
                    <p className="text-white/60 text-xs tracking-widest uppercase mt-1">
                      {art.medium} · {art.year}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right column — offset down */}
          <div className="flex flex-col gap-3 md:gap-4 md:mt-16">
            {rightCol.map((art) => (
              <button
                key={art.id}
                className="group relative overflow-hidden rounded-sm bg-muted text-left w-full cursor-pointer"
                onClick={() => setSelected(art)}
              >
                <img
                  src={art.url}
                  alt={art.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ aspectRatio: art.aspect === "portrait" ? "3/4" : art.aspect === "landscape" ? "4/3" : "1/1" }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white font-display font-light text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {art.title}
                    </p>
                    <p className="text-white/60 text-xs tracking-widest uppercase mt-1">
                      {art.medium} · {art.year}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected && <Lightbox art={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
