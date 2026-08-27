import { useState } from "react";
import { projects } from "../data/projects";

/* ─── Variant definitions ─────────────────────────────────── */
const variants = [
  {
    id: "A",
    name: "Neon Ink",
    description: "Dark ground, hot-magenta pop. Bold editorial energy.",
    accent: "#F0247A",
    bg: "#0C0C0A",
    fg: "#F2F0EB",
    card: "#161614",
    cardBorder: "#2A2A27",
    muted: "#1E1E1B",
    mutedFg: "#8A8880",
    splitLeft: "#0C0C0A",
    splitRight: "#141412",
    tagBg: "#221C1F",
    tagFg: "#F0247A",
    pill: "#F0247A",
    pillFg: "#FFFFFF",
    displayFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Instrument Sans', system-ui, sans-serif",
    heroNameStyle: "italic",
    heroSize: "clamp(4rem,10vw,9rem)",
    labelColor: "#F0247A",
  },
  {
    id: "B",
    name: "Bloom",
    description: "Warm cream, rose + sage. Art-school tactility.",
    accent: "#D4527A",
    bg: "#FBF8F2",
    fg: "#1A0D12",
    card: "#FFFFFF",
    cardBorder: "#F0E6EC",
    muted: "#F5EEF2",
    mutedFg: "#9A7A88",
    splitLeft: "#E8C5D2",
    splitRight: "#FBF8F2",
    tagBg: "#FAF0F4",
    tagFg: "#9A7A88",
    pill: "#D4527A",
    pillFg: "#FFFFFF",
    displayFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Instrument Sans', system-ui, sans-serif",
    heroNameStyle: "normal",
    heroSize: "clamp(4rem,9vw,8rem)",
    labelColor: "#4A7C64",
    secondAccent: "#4A7C64",
  },
  {
    id: "C",
    name: "Electric",
    description: "Lavender ground, bright pink + indigo. Digital-native maximalism.",
    accent: "#FF2D8A",
    bg: "#F6F2FF",
    fg: "#130A26",
    card: "#FFFFFF",
    cardBorder: "#E8E0F8",
    muted: "#EDE8FA",
    mutedFg: "#7B6A9A",
    splitLeft: "#130A26",
    splitRight: "#F6F2FF",
    tagBg: "#EDE8FA",
    tagFg: "#7B6A9A",
    pill: "#FF2D8A",
    pillFg: "#FFFFFF",
    displayFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Instrument Sans', system-ui, sans-serif",
    heroNameStyle: "italic",
    heroSize: "clamp(3.5rem,9vw,8.5rem)",
    labelColor: "#FF2D8A",
    secondAccent: "#4F46E5",
  },
] as const;

type Variant = (typeof variants)[number];

/* ─── Mini project card ───────────────────────────────────── */
function MiniCard({ v, index }: { v: Variant; index: number }) {
  const p = projects[index % projects.length];
  return (
    <div
      className="rounded-sm overflow-hidden border"
      style={{
        backgroundColor: v.card,
        borderColor: v.cardBorder,
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: v.muted }}>
        <img
          src={p.imageUrl}
          alt={p.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div
          className="absolute top-2 left-2 text-xs font-mono"
          style={{ color: v.mutedFg }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="p-4">
        <p
          className="font-medium text-sm mb-1"
          style={{ fontFamily: v.displayFont, color: v.fg, fontSize: "1rem" }}
        >
          {p.title}
        </p>
        <p className="text-xs leading-relaxed mb-3" style={{ color: v.mutedFg }}>
          {p.hook.slice(0, 65)}…
        </p>
        <div className="flex flex-wrap gap-1">
          {p.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{ background: v.tagBg, color: v.tagFg }}
            >
              {tag}
            </span>
          ))}
          <span
            className="text-xs px-2 py-0.5 rounded-sm font-medium"
            style={{ background: v.pill, color: v.pillFg }}
          >
            {p.tags[2]}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero preview ────────────────────────────────────────── */
function HeroPreview({ v }: { v: Variant }) {
  return (
    <div
      className="relative overflow-hidden rounded-sm"
      style={{ background: v.bg, height: 260 }}
    >
      {/* Split */}
      <div
        className="absolute inset-0"
        style={{
          background: v.splitLeft,
          clipPath: "polygon(0 0, 54% 0, 40% 100%, 0 100%)",
        }}
      />

      {/* Name */}
      <div className="absolute bottom-6 left-6 z-10">
        <div
          style={{
            fontFamily: v.displayFont,
            fontStyle: v.heroNameStyle,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            lineHeight: 0.92,
            color: v.id === "B" ? v.fg : "#FFFFFF",
            fontWeight: 300,
          }}
        >
          Jordan
          <br />
          Lee.
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-5 h-px" style={{ background: v.accent }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              color: v.id === "B" ? v.mutedFg : "rgba(255,255,255,0.4)",
              fontFamily: v.bodyFont,
            }}
          >
            CS + Art & Design
          </span>
        </div>
      </div>

      {/* Right panel text */}
      <div
        className="absolute bottom-6 right-5 text-right max-w-[42%]"
        style={{ zIndex: 10 }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: v.fg, fontFamily: v.bodyFont, opacity: 0.85 }}
        >
          I build software that thinks{" "}
          <em style={{ fontStyle: "italic", color: v.accent, fontFamily: v.displayFont }}>
            visually.
          </em>
        </p>
        <div className="mt-3 flex items-center gap-3 justify-end">
          <span
            className="text-xs font-medium"
            style={{ color: v.accent, fontFamily: v.bodyFont }}
          >
            View Work →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Full variant card ───────────────────────────────────── */
function VariantCard({ v, selected, onSelect }: { v: Variant; selected: boolean; onSelect: () => void }) {
  return (
    <div
      className="flex flex-col rounded-md overflow-hidden border-2 transition-all duration-200 cursor-pointer"
      style={{
        borderColor: selected ? v.accent : "transparent",
        boxShadow: selected
          ? `0 0 0 4px ${v.accent}30, 0 8px 32px ${v.accent}20`
          : "0 2px 12px rgba(0,0,0,0.06)",
        background: v.bg,
      }}
      onClick={onSelect}
    >
      {/* Colored header strip */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ background: v.splitLeft, borderBottom: `1px solid ${v.cardBorder}` }}
      >
        <div>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: v.accent, fontFamily: v.bodyFont }}
          >
            Option {v.id}
          </span>
          <p
            className="text-xl font-medium mt-0.5"
            style={{
              fontFamily: v.displayFont,
              color: v.id === "B" ? v.fg : "#FFFFFF",
              fontStyle: v.heroNameStyle,
            }}
          >
            {v.name}
          </p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-200"
          style={{
            borderColor: selected ? v.accent : "rgba(255,255,255,0.2)",
            background: selected ? v.accent : "transparent",
          }}
        >
          {selected && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Description */}
        <p
          className="text-xs leading-relaxed"
          style={{ color: v.mutedFg, fontFamily: v.bodyFont }}
        >
          {v.description}
        </p>

        {/* Palette swatches */}
        <div className="flex items-center gap-2">
          {[v.bg, v.splitLeft, v.accent, v.card].map((color, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border"
              style={{ background: color, borderColor: v.cardBorder }}
            />
          ))}
          {"secondAccent" in v && (
            <div
              className="w-6 h-6 rounded-full border"
              style={{ background: (v as any).secondAccent, borderColor: v.cardBorder }}
            />
          )}
        </div>

        {/* Hero preview */}
        <HeroPreview v={v} />

        {/* Project cards preview */}
        <div className="grid grid-cols-2 gap-3">
          <MiniCard v={v} index={0} />
          <MiniCard v={v} index={1} />
        </div>

        {/* Nav preview */}
        <div
          className="flex items-center justify-between px-4 py-2.5 rounded-sm border text-xs"
          style={{
            background: v.card,
            borderColor: v.cardBorder,
            fontFamily: v.bodyFont,
          }}
        >
          <span style={{ fontFamily: v.displayFont, color: v.fg, fontStyle: v.heroNameStyle }}>
            Jordan Lee
          </span>
          <div className="flex gap-4">
            {["Work", "About", "Resume"].map((link, i) => (
              <span
                key={link}
                style={{ color: i === 0 ? v.accent : v.mutedFg }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>

        {/* Select button */}
        <button
          className="w-full py-2.5 rounded-sm text-sm font-medium transition-all duration-200"
          style={{
            background: selected ? v.accent : v.muted,
            color: selected ? v.pillFg : v.mutedFg,
            fontFamily: v.bodyFont,
          }}
          onClick={onSelect}
        >
          {selected ? "✓ Selected" : "Choose this design"}
        </button>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ThemePicker() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{ background: "#F0EDF8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "#9B8EC4" }}
          >
            Pick your vibe
          </p>
          <h1
            className="text-4xl md:text-5xl font-light mb-3"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#130A26" }}
          >
            Three designs.
            <em className="italic" style={{ color: "#FF2D8A" }}> One portfolio.</em>
          </h1>
          <p className="text-sm" style={{ color: "#7B6A9A" }}>
            Click a card to select it, then tell me which one feels like you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variants.map((v) => (
            <VariantCard
              key={v.id}
              v={v}
              selected={selected === v.id}
              onSelect={() => setSelected(v.id)}
            />
          ))}
        </div>

        {/* Selection confirmation */}
        {selected && (
          <div
            className="mt-10 p-5 rounded-md text-center border"
            style={{
              background: "#FFFFFF",
              borderColor: "#E8E0F8",
            }}
          >
            <p className="text-sm" style={{ color: "#7B6A9A" }}>
              You picked{" "}
              <strong style={{ color: "#130A26" }}>
                Option {selected} — {variants.find((v) => v.id === selected)?.name}
              </strong>
              . Tell me and I'll apply it across the whole portfolio!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
