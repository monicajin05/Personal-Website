import { useEffect, useState } from "react";

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  url: string;
  images?: string[];
}

const artworks: Artwork[] = [
  {
    id: "apex-downtown",
    title: "Apex Downtown",
    medium: "Plein air painting",
    year: "2023",
    url: "/images/gallery/2d-art/apex-downtown.jpg",
  },
  {
    id: "portrait",
    title: "Portrait",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/portrait.png",
  },
  {
    id: "figure-drawing",
    title: "Figure Drawing",
    medium: "Life drawing",
    year: "2023",
    url: "/images/gallery/2d-art/figure-drawing.jpg",
  },
  {
    id: "congressional-art",
    title: "Congressional Art Show",
    medium: "Painting",
    year: "2022",
    url: "/images/gallery/2d-art/congressional-art.jpg",
  },
  {
    id: "statue",
    title: "Statue Study",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/statue.png",
  },
  {
    id: "fuquay-varina-plein-air",
    title: "Fuquay-Varina Plein Air",
    medium: "Plein air painting",
    year: "2022",
    url: "/images/gallery/2d-art/fuquay-varina-plein-air.jpg",
  },
  {
    id: "figure",
    title: "Figure Study",
    medium: "Illustration",
    year: "2023",
    url: "/images/gallery/2d-art/figure.png",
  },
  {
    id: "vibrant-lake",
    title: "Vibrant Lake",
    medium: "Plein air painting",
    year: "2022",
    url: "/images/gallery/2d-art/vibrant-lake.jpg",
  },
  {
    id: "nature-arch",
    title: "Nature Arch",
    medium: "Plein air painting",
    year: "2022",
    url: "/images/gallery/2d-art/nature-arch.jpg",
  },
  {
    id: "old-man",
    title: "Old Man",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/old-man.png",
  },
  {
    id: "hotpot",
    title: "Hot Pot",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/hotpot.png",
  },
  {
    id: "oranges",
    title: "Oranges",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/oranges.png",
  },
  {
    id: "egg",
    title: "Egg Study",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/egg.png",
  },
  {
    id: "unfinished",
    title: "Unfinished Study",
    medium: "Digital painting",
    year: "2023",
    url: "/images/gallery/2d-art/unfinished.jpeg",
  },
  {
    id: "apples",
    title: "Apples",
    medium: "Plein air painting",
    year: "2023",
    url: "/images/gallery/2d-art/apples.jpg",
  },
  {
    id: "hepworth-chess-set",
    title: "Hepworth Chess Set",
    medium: "3D — Blender, Poliigon textures",
    year: "2024",
    url: "/images/gallery/3d-art/final1.png",
    images: [
      "/images/gallery/3d-art/design1.png",
      "/images/gallery/3d-art/design2.png",
      "/images/gallery/3d-art/analysis1.png",
      "/images/gallery/3d-art/analysis2.png",
      "/images/gallery/3d-art/analysis3.png",
      "/images/gallery/3d-art/analysis4.png",
      "/images/gallery/3d-art/analysis5.png",
      "/images/gallery/3d-art/closeup1.png",
      "/images/gallery/3d-art/closeup2.png",
      "/images/gallery/3d-art/altcolor.png",
      "/images/gallery/3d-art/final2.png",
      "/images/gallery/3d-art/final3.png",
      "/images/gallery/3d-art/final1.png",
    ],
  },
];

function Lightbox({
  artwork,
  index,
  onIndexChange,
  onClose,
}: {
  artwork: Artwork;
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const slides = artwork.images ?? [artwork.url];
  const hasMultiple = slides.length > 1;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowRight") onIndexChange((index + 1) % slides.length);
      if (hasMultiple && e.key === "ArrowLeft") onIndexChange((index - 1 + slides.length) % slides.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, hasMultiple, slides.length, onClose, onIndexChange]);

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
        <div className="relative">
          <img
            src={slides[index]}
            alt={artwork.title}
            className="w-full max-h-[78vh] object-contain rounded-sm"
          />
          {hasMultiple && (
            <>
              <button
                onClick={() => onIndexChange((index - 1 + slides.length) % slides.length)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-200"
              >
                ←
              </button>
              <button
                onClick={() => onIndexChange((index + 1) % slides.length)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-200"
              >
                →
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-white font-display font-light text-lg" style={{ fontFamily: "var(--font-display)" }}>
              {artwork.title}
            </p>
            <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
              {artwork.medium} · {artwork.year}
              {hasMultiple && ` · ${index + 1} / ${slides.length}`}
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
  const [selected, setSelected] = useState<{ artwork: Artwork; index: number } | null>(null);

  function openArtwork(art: Artwork) {
    const startIndex = art.images ? Math.max(art.images.indexOf(art.url), 0) : 0;
    setSelected({ artwork: art, index: startIndex });
  }

  return (
    <div className="min-h-screen pb-32">
      {/* Accent bar */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, var(--accent) 0%, var(--panel) 60%, transparent 100%)" }} />

      {/* Header + blurb */}
      <div className="pt-20 pb-0 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-baseline justify-between border-b border-border pb-5 mb-14">
          <span className="font-display font-light text-lg text-accent" style={{ fontFamily: "var(--font-display)" }}>
            Art Gallery
          </span>
          <span className="text-xs tracking-[0.14em] uppercase text-second">Monica Jin</span>
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
              <em className="italic text-accent">way of thinking.</em>
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-5 text-base text-foreground/75 leading-relaxed">
            <p>
              This is how I express myself!
            </p>
          </div>
        </div>
      </div>

      {/* Masonry gallery */}
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {artworks.map((art) => {
            const count = art.images?.length;
            return (
              <button
                key={art.id}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted text-left cursor-pointer"
                onClick={() => openArtwork(art)}
              >
                <img
                  src={art.url}
                  alt={art.title}
                  className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Multi-image badge */}
                {count && count > 1 && (
                  <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide text-white bg-black/50 backdrop-blur-sm">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <rect x="1" y="1" width="7" height="7" rx="1" stroke="white" strokeWidth="1" />
                      <rect x="3" y="3" width="7" height="7" rx="1" fill="black" fillOpacity="0.5" stroke="white" strokeWidth="1" />
                    </svg>
                    {count}
                  </span>
                )}
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
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <Lightbox
          artwork={selected.artwork}
          index={selected.index}
          onIndexChange={(i) => setSelected({ artwork: selected.artwork, index: i })}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
