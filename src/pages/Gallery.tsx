import { useState } from "react";

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  url: string;
  aspect: "portrait" | "landscape" | "square";
}

const artworks: Artwork[] = [
  {
    id: "chess-final-1",
    title: "Hepworth Chess Set — Final",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/final1.png",
    aspect: "landscape",
  },
  {
    id: "apex-downtown",
    title: "Apex Downtown",
    medium: "Plein air painting",
    year: "2023",
    url: "/images/gallery/2d-art/apex-downtown.jpg",
    aspect: "landscape",
  },
  {
    id: "chess-final-2",
    title: "Hepworth Chess Set — Final",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/final2.png",
    aspect: "landscape",
  },
  {
    id: "portrait",
    title: "Portrait",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/portrait.png",
    aspect: "portrait",
  },
  {
    id: "chess-closeup-1",
    title: "Hepworth Chess Set — Closeup",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/closeup1.png",
    aspect: "square",
  },
  {
    id: "figure-drawing",
    title: "Figure Drawing",
    medium: "Life drawing",
    year: "2023",
    url: "/images/gallery/2d-art/figure-drawing.jpg",
    aspect: "portrait",
  },
  {
    id: "congressional-art",
    title: "Congressional Art Show",
    medium: "Painting",
    year: "2022",
    url: "/images/gallery/2d-art/congressional-art.jpg",
    aspect: "landscape",
  },
  {
    id: "chess-closeup-2",
    title: "Hepworth Chess Set — Closeup",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/closeup2.png",
    aspect: "square",
  },
  {
    id: "statue",
    title: "Statue Study",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/statue.png",
    aspect: "portrait",
  },
  {
    id: "chess-design-1",
    title: "Hepworth Chess Set — Design",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/design1.png",
    aspect: "landscape",
  },
  {
    id: "fuquay-varina-plein-air",
    title: "Fuquay-Varina Plein Air",
    medium: "Plein air painting",
    year: "2022",
    url: "/images/gallery/2d-art/fuquay-varina-plein-air.jpg",
    aspect: "landscape",
  },
  {
    id: "figure",
    title: "Figure Study",
    medium: "Illustration",
    year: "2023",
    url: "/images/gallery/2d-art/figure.png",
    aspect: "portrait",
  },
  {
    id: "chess-design-2",
    title: "Hepworth Chess Set — Design",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/design2.png",
    aspect: "landscape",
  },
  {
    id: "vibrant-lake",
    title: "Vibrant Lake",
    medium: "Plein air painting",
    year: "2022",
    url: "/images/gallery/2d-art/vibrant-lake.jpg",
    aspect: "landscape",
  },
  {
    id: "chess-final-3",
    title: "Hepworth Chess Set — Final",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/final3.png",
    aspect: "landscape",
  },
  {
    id: "nature-arch",
    title: "Nature Arch",
    medium: "Plein air painting",
    year: "2022",
    url: "/images/gallery/2d-art/nature-arch.jpg",
    aspect: "landscape",
  },
  {
    id: "old-man",
    title: "Old Man",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/old-man.png",
    aspect: "portrait",
  },
  {
    id: "chess-analysis-1",
    title: "Hepworth Chess Set — Analysis",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/analysis1.png",
    aspect: "landscape",
  },
  {
    id: "hotpot",
    title: "Hot Pot",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/hotpot.png",
    aspect: "landscape",
  },
  {
    id: "chess-analysis-2",
    title: "Hepworth Chess Set — Analysis",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/analysis2.png",
    aspect: "landscape",
  },
  {
    id: "oranges",
    title: "Oranges",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/oranges.png",
    aspect: "square",
  },
  {
    id: "chess-analysis-3",
    title: "Hepworth Chess Set — Analysis",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/analysis3.png",
    aspect: "landscape",
  },
  {
    id: "egg",
    title: "Egg Study",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/egg.png",
    aspect: "square",
  },
  {
    id: "chess-analysis-4",
    title: "Hepworth Chess Set — Analysis",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/analysis4.png",
    aspect: "landscape",
  },
  {
    id: "unfinished",
    title: "Unfinished Study",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/unfinished.jpeg",
    aspect: "portrait",
  },
  {
    id: "chess-analysis-5",
    title: "Hepworth Chess Set — Analysis",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/analysis5.png",
    aspect: "landscape",
  },
  {
    id: "chess-altcolor",
    title: "Hepworth Chess Set — Alt Colorway",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/altcolor.png",
    aspect: "landscape",
  },
];

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
              to make games and research projects. This gallery holds the traditional and 3D work that sits
              alongside those projects: plein air and studio painting, figure drawing, and a Blender chess set
              modeled in the style of sculptor Barbara Hepworth, textured with Poliigon materials.
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
