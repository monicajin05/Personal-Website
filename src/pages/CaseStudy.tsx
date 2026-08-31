import { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { projects } from "../data/projects";
import TagPill from "../components/TagPill";

const COUNT_WORDS = ["zero", "one", "two", "three", "four", "five", "six"];
function countWord(n: number): string {
  return COUNT_WORDS[n] ?? String(n);
}

function CaseStudySection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 border-t border-border scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <div>
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-second">
            {label}
          </span>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-14 z-30 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 md:px-12 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="shrink-0 px-3 py-3 text-xs font-medium tracking-wide transition-colors duration-200 relative"
            style={{ color: active === id ? "var(--accent)" : "var(--muted-fg)" }}
          >
            {label}
            {active === id && (
              <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-accent rounded-full" />
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}

function GalleryLightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: { src: string; caption: string }[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndexChange]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-16"
      style={{ background: "rgba(13,14,32,0.92)" }}
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img
            src={images[index].src}
            alt={images[index].caption}
            className="w-full max-h-[78vh] object-contain rounded-sm"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-200"
              >
                ←
              </button>
              <button
                onClick={() => onIndexChange((index + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors duration-200"
              >
                →
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-white/70 text-sm leading-relaxed max-w-lg">{images[index].caption}</p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-white/40 text-xs tracking-widest uppercase">
              {index + 1} / {images.length}
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

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef(slug);

  useEffect(() => {
    if (scrollRef.current !== slug) {
      window.scrollTo(0, 0);
      scrollRef.current = slug;
    }
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "exploration", label: "Exploration" },
    { id: "solution", label: "Solution" },
    ...(project.galleryImages && project.galleryImages.length > 0 ? [{ id: "gallery", label: "Gallery" }] : []),
    { id: "reflection", label: "Reflection" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 px-6 md:px-12"
        style={{ backgroundColor: project.color }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors duration-200 mb-12"
          >
            ← Work
          </Link>
          <h1
            className="text-[clamp(3rem,8vw,6rem)] font-display font-light italic text-white leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            {project.hook}
          </p>

          {/* Links */}
          {(project.link || project.itchLink || project.liveLink) && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium tracking-wide border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 0C2.91 0 0 2.98 0 6.65c0 2.94 1.85 5.43 4.42 6.31.32.06.44-.14.44-.32v-1.12c-1.8.4-2.18-.89-2.18-.89-.3-.78-.72-1-.72-1-.59-.41.04-.4.04-.4.65.05 1 .68 1 .68.58 1.02 1.52.73 1.9.56.06-.43.23-.73.41-.9-1.44-.17-2.95-.74-2.95-3.3 0-.73.25-1.32.67-1.79-.07-.17-.29-.85.06-1.77 0 0 .55-.18 1.8.69A6.1 6.1 0 0 1 6.5 3.1c.56 0 1.12.08 1.64.22 1.25-.87 1.8-.69 1.8-.69.35.92.13 1.6.06 1.77.42.47.67 1.06.67 1.79 0 2.57-1.52 3.13-2.96 3.29.23.21.44.61.44 1.23v1.82c0 .18.11.39.44.32A6.66 6.66 0 0 0 13 6.65C13 2.98 10.09 0 6.5 0Z" fill="currentColor"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.itchLink && (
                <a
                  href={project.itchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium tracking-wide border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 245 245" fill="currentColor">
                    <path d="M31.99 7.02C21.17 13.3 0 39.92 0 46.4v12.15c0 15.35 13.4 28.8 25.46 28.8 14.57 0 26.7-12.25 26.7-26.82 0 14.57 11.73 26.82 26.3 26.82s25.9-12.25 25.9-26.82c0 14.57 12.4 26.82 26.97 26.82h.22c14.57 0 26.97-12.25 26.97-26.82 0 14.57 11.32 26.82 25.9 26.82s26.3-12.25 26.3-26.82c0 14.57 12.13 26.82 26.7 26.82C222.6 87.35 236 73.9 236 58.55V46.4c0-6.48-21.17-33.1-31.99-39.38C194.97 1.48 50.03 1.48 31.99 7.02zm6.87 105.1c-15.17 1.97-26.12 15.44-26.12 30.73v76.6c0 10.39 23.07 18.81 51.55 18.81h151.7c28.47 0 51.55-8.42 51.55-18.81v-76.6c0-15.47-11.15-28.93-26.47-30.84-2.44 10.63-12.12 21.93-30.08 21.93-16.57 0-27.5-12.25-27.5-26.82 0 14.57-11.73 26.82-26.3 26.82h-.22c-14.57 0-26.97-12.25-26.97-26.82 0 14.57-12.4 26.82-26.97 26.82S77.6 121.69 77.6 107.12c0 14.39-10.6 26.6-26.87 26.82-5.13-.13-8.78-.79-11.86-1.82zm64.49 34.51h61.5l-5.26 34.05h-16.43l-.01 24.37H118.3v-24.37H101.6l-4.84-34.05h6.59z"/>
                  </svg>
                  Play on itch.io
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium tracking-wide border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="6" stroke="currentColor" strokeWidth="1" />
                    <path d="M0.7 6.5h11.6M6.5 0.7c1.6 1.7 2.5 3.7 2.5 5.8s-.9 4.1-2.5 5.8c-1.6-1.7-2.5-3.7-2.5-5.8s.9-4.1 2.5-5.8Z" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  Live demo
                </a>
              )}
            </div>
          )}

          {/* Meta row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { label: "Role", value: project.role },
              { label: "Timeline", value: project.timeline },
              { label: "Year", value: project.year },
              { label: "Tools", value: project.tools.slice(0, 3).join(", ") + (project.tools.length > 3 ? " +" + (project.tools.length - 3) : "") },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs tracking-widest uppercase text-white/30 mb-1">{label}</p>
                <p className="text-sm text-white/80 leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section nav */}
      <SectionNav sections={sections} />

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-1">
        <div className="overflow-hidden rounded-sm bg-muted">
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="block w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
      </div>

      {/* Case study body */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24">

        <CaseStudySection id="overview" label="Overview">
          <div className="space-y-4">
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              {project.overview}
            </p>
            <p className="text-muted-fg text-base leading-relaxed">
              <strong className="text-foreground font-medium">Audience — </strong>
              {project.audience}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <TagPill key={tool} label={tool} />
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection id="problem" label="Problem">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            {project.problem}
          </p>
        </CaseStudySection>

        <CaseStudySection id="exploration" label="Exploration">
          <p className="text-muted-fg text-sm mb-8">
            {countWord(project.explorationItems.length).replace(/^./, (c) => c.toUpperCase())} approaches considered before committing to a direction.
          </p>
          <div className="space-y-8">
            {project.explorationItems.map((item, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-border">
                {i === project.explorationItems.length - 1 && (
                  <div className="absolute -left-[1px] top-0 bottom-0 border-l-2 border-accent" />
                )}
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xs font-medium tracking-widest text-muted-fg mt-1">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <h4
                    className="font-display font-medium text-foreground text-lg flex items-center gap-2 flex-wrap"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                    {i === project.explorationItems.length - 1 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-accent text-accent-fg">
                        Chosen
                      </span>
                    )}
                  </h4>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-3 ml-5">
                  {item.description}
                </p>
                <div className="ml-5 flex items-start gap-2">
                  <span className="text-xs font-medium text-muted-fg shrink-0 mt-0.5">Tradeoff —</span>
                  <p className="text-muted-fg text-sm leading-relaxed">{item.tradeoff}</p>
                </div>
              </div>
            ))}
          </div>

          {project.edgeCases.length > 0 && (
            <div className="mt-10 p-6 bg-muted rounded-sm border border-border">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-fg mb-4">
                Edge cases discovered along the way
              </p>
              <ul className="space-y-3">
                {project.edgeCases.map((ec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="text-accent mt-1 shrink-0">·</span>
                    {ec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.docLinks && project.docLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs font-medium tracking-widest uppercase text-muted-fg">Design docs</span>
              {project.docLinks.map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-foreground underline underline-offset-4 decoration-border transition-colors duration-200"
                >
                  {doc.label} ↗
                </a>
              ))}
            </div>
          )}
        </CaseStudySection>

        <CaseStudySection id="solution" label="Solution">
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
            {project.solution}
          </p>
          {project.solutionDetail && (
            <p className="text-muted-fg text-base leading-relaxed">{project.solutionDetail}</p>
          )}

          <div className="mt-8 overflow-hidden rounded-sm bg-muted">
            <img
              src={project.solutionImageUrl}
              alt={`${project.title} solution detail`}
              className="block w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
        </CaseStudySection>

        {project.galleryImages && project.galleryImages.length > 0 && (
          <CaseStudySection id="gallery" label="Gallery">
            <p className="text-muted-fg text-sm mb-8">
              Process shots, design docs, and assets from along the way.
            </p>
            <div className="columns-1 sm:columns-2 gap-4">
              {project.galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted text-left cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end p-4">
                    <p className="text-white text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </CaseStudySection>
        )}

        <CaseStudySection id="reflection" label="Reflection">
          <div className="space-y-6">
            {project.reflection.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="text-2xl font-display font-light text-border shrink-0 leading-none mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <p className="text-foreground/80 text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
      </div>

      {/* Next project */}
      <div className="border-t border-border">
        <Link
          to={`/work/${nextProject.slug}`}
          className="group flex items-center justify-between px-6 md:px-12 py-10 max-w-6xl mx-auto hover:bg-muted/50 transition-colors duration-200"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-fg mb-2">Next project</p>
            <p
              className="text-2xl font-display font-light text-foreground group-hover:text-accent transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {nextProject.title}
            </p>
            <p className="text-muted-fg text-sm mt-1">{nextProject.hook}</p>
          </div>
          <span className="text-2xl text-muted-fg group-hover:text-accent group-hover:translate-x-2 transition-all duration-200">
            →
          </span>
        </Link>
      </div>

      {/* Gallery lightbox */}
      {project.galleryImages && lightboxIndex !== null && (
        <GalleryLightbox
          images={project.galleryImages}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
