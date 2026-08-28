import SectionHeader from "../components/SectionHeader";

interface ResumeEntry {
  org: string;
  role: string;
  period: string;
  items: string[];
}

// ── Fill these in with your real details ──────────────────────
const experience: ResumeEntry[] = [
  {
    org: "AI-Assisted Visualization of Ceramic Glaze Design",
    role: "Lead, Simulation and Interface Development",
    period: "In development",
    items: [
      "Awarded the Arts + Data Science Interdisciplinary Mini-Grant ($5,000).",
      "Exploring how AI can assist human decision-making in ceramic glaze design by narrowing material-composition and firing-parameter combinations.",
      "Training the ML model on real-world ceramic samples and assisting physical fabrication of 3D-printed materials.",
      "Built a proof-of-concept simulation demo using three.js.",
    ],
  },
  {
    org: "Adversarial Attacks: Weaknesses in Autonomous Vehicle Collision Detectors",
    role: "Undergraduate researcher (solo)",
    period: "Fall 2024",
    items: [
      "Awarded a Fall 2024 REU grant ($3,000).",
      "Used adversarial attacks to study weaknesses in visual detectors via gradient-based models and physical systems.",
      "Recreated prior work showing physical adversarial patterns (e.g. patterned t-shirts) achieve high attack success against person-detection algorithms, and studied why.",
    ],
  },
  {
    org: "Encore!",
    role: "Environment artist",
    period: "Through Summer 2025",
    items: [
      "Created 5 backgrounds for an environmental horror game on a 22-person student team.",
      "Worked with game design to convey plot through environment art and helped onboard new artists.",
      "Helped present the project at SGS, Summer 2025.",
    ],
  },
];

const education = [
  {
    org: "North Carolina State University",
    degree: "Computer Science and Art & Design (junior)",
    period: "In progress",
    note: "Start year, expected graduation, GPA, and honors are still unknown — add those if you want them on the resume.",
  },
];

const courses = [
  "[ Add courses — not listed in the content reference ]",
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/monicajin/", display: "linkedin.com/in/monicajin" },
  { label: "GitHub", href: "https://github.com/monicajin05", display: "github.com/monicajin05" },
];
// ─────────────────────────────────────────────────────────────

function ResumeBlock({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
      <div>
        <p className="font-medium text-foreground text-sm">{entry.org}</p>
        <p className="text-muted-fg text-xs mt-0.5">{entry.period}</p>
      </div>
      <div>
        <p className="font-display font-medium text-foreground text-lg mb-3" style={{ fontFamily: "var(--font-display)" }}>
          {entry.role}
        </p>
        <ul className="space-y-2">
          {entry.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
              <span className="text-accent mt-1.5 shrink-0 text-xs">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <SectionHeader label="Resume" title="Monica Jin" />
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-accent transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download PDF
        </button>
      </div>

      {/* Contact */}
      <div className="flex flex-wrap gap-6 mb-12 pb-8 border-b border-border">
        {contactLinks.map(({ label, href, display }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-muted-fg hover:text-accent transition-colors duration-200">
            <span className="text-xs font-medium tracking-widest uppercase text-border group-hover:text-accent/50 transition-colors duration-200">{label}</span>
            <span>{display}</span>
          </a>
        ))}
      </div>

      {/* Education */}
      <section className="mb-4">
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2 text-second">Education</p>
        {education.map((ed) => (
          <div key={ed.org} className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
            <div>
              <p className="font-medium text-foreground text-sm">{ed.org}</p>
              <p className="text-muted-fg text-xs mt-0.5">{ed.period}</p>
            </div>
            <div>
              <p className="font-display font-medium text-foreground text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {ed.degree}
              </p>
              <p className="text-sm text-muted-fg leading-relaxed">{ed.note}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                {courses.map((c) => <span key={c} className="text-xs text-muted-fg">{c}</span>)}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section>
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2 text-second">Experience</p>
        {experience.map((entry) => (
          <ResumeBlock key={entry.org} entry={entry} />
        ))}
      </section>

      {/* Skills */}
      <section className="mt-4">
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2 text-second">Skills</p>
        <div className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
          <div><p className="text-muted-fg text-xs">Languages & tools</p></div>
          <div className="space-y-4">
            {[
              { category: "Game engines", items: "Godot, Unity, Unreal" },
              { category: "Art & 3D", items: "Aseprite, Blender, Blockbench, Procreate, Twine" },
              { category: "Software", items: "VS Code, GitHub, three.js, WebGL / GLSL" },
              { category: "Documented roles", items: "Programming, UI, level/lighting design, 2D/environment art, game design" },
            ].map(({ category, items }) => (
              <div key={category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="text-xs font-medium text-muted-fg w-36 shrink-0">{category}</span>
                <span className="text-sm text-foreground/80">{items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-fg">
          Open to internships and collaborations ·{" "}
          <a href="https://www.linkedin.com/in/monicajin/" className="hover:text-accent transition-colors duration-200">
            linkedin.com/in/monicajin
          </a>
        </p>
      </div>
    </div>
  );
}
