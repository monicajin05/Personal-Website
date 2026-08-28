import SectionHeader from "../components/SectionHeader";

interface ResumeEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  items: string[];
}

const experience: ResumeEntry[] = [
  {
    org: "Salesforce",
    role: "Software Engineer Intern — Event Monitoring & Security",
    period: "May 2026 – August 2026",
    location: "San Francisco, CA",
    items: [
      "Designed and shipped audit logs and APIs that surface suspicious GraphQL activity, helping customers detect potential data exfiltration. (Java, Apex)",
      "Added user-agent telemetry across major APIs, enabling customers to identify external AI agents and connected applications; partnered with 8+ product & security teams to deliver data end-to-end.",
      "Cut customer log-export bandwidth by 90–95% by building server-side compression, improving reliability for enterprise-scale customer log retrievals.",
      "Integrated unit and UI visual test suites (JUnit) into CI/CD pipelines, using AI-driven REST API testing and synthetic log datasets to reduce regression risk.",
    ],
  },
  {
    org: "IRIS Technologies",
    role: "Software Engineer Intern",
    period: "August 2025 – May 2026",
    location: "Raleigh, NC",
    items: [
      "Led software design for movement and object-manipulation behaviors for a humanoid robot, testing in simulation before deploying to hardware. (Python, C++, NVIDIA Isaac Sim)",
      "Built a conversational AI interface with context-aware responses, demoed live at industry conferences. (Claude API)",
    ],
  },
  {
    org: "Pearson",
    role: "Software Engineer Intern — AI/ML Platform",
    period: "June 2025 – August 2025",
    location: "Durham, NC",
    items: [
      "Built and deployed a Python image processing pipeline for an LLM platform, integrating GPT-4.1 for image understanding and Azure Content Safety to filter unsafe content, improving document chunk quality by 80%.",
      "Introduced video processing as a new platform capability, using MoviePy, Whisper, and GPT-4.1 to generate transcripts and visual summaries.",
      "Aligned with downstream teams on the ideal output format for image descriptions, then validated against real-world educational samples in CI/CD pipelines.",
    ],
  },
  {
    org: "North Carolina State University",
    role: "Machine Learning Research Intern",
    period: "January 2024 – May 2025",
    location: "Raleigh, NC",
    items: [
      "Tested how reliable self-driving car vision systems are when facing tampered images, informing safer perception models.",
      "Measured a 38.3% accuracy drop across 10,000+ adversarial test images generated via adversarial attacks, exposing robustness gaps in vision transformer models.",
      "Benchmarked iterative attacks against single-step attacks to compare model robustness under multi-step perturbations, then engineered physical adversarial patches to test attacks under real-world imaging conditions.",
    ],
  },
];

const resumeProjects: { title: string; tools: string; link?: string; items: string[] }[] = [
  {
    title: "Ceramic AI",
    tools: "Python, Scikit-learn, React, Three.js, TypeScript",
    items: [
      "Built a machine learning app that predicts how a glaze will look based on clay and firing conditions, working alongside architecture students who created physical models to validate the predictions.",
      "Developed a 3D interface that renders predicted glaze finishes on interactive ceramic models in real time.",
    ],
  },
  {
    title: "3D Battlezone",
    tools: "WebGL, JavaScript, GLSL, HTML/CSS",
    link: "https://github.com/monicajin05/Battlezone",
    items: [
      "Recreated Battlezone from scratch with a custom 3D rendering engine, including terrain, combat, and enemy AI.",
      "Built lighting shaders, mouse-based aiming, and a live minimap using multi-pass rendering.",
    ],
  },
];

const skillCategories = [
  { category: "Languages", items: "Python, Java, C++, C#, TypeScript, SQL, Kotlin, React, HTML/CSS" },
  { category: "AI/ML", items: "PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, GPT-4.1, Claude API, Whisper" },
  { category: "Developer Tools", items: "Git, Docker, Bazel, Jenkins, CMake, Perforce, Linux, VS Code, IntelliJ, Azure" },
  { category: "Graphics & Robotics", items: "Unreal Engine, Unity, Godot, NVIDIA Isaac Lab, Isaac Sim, Figma, Blender" },
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/monicajin/", display: "linkedin.com/in/monicajin" },
  { label: "GitHub", href: "https://github.com/monicajin05", display: "github.com/monicajin05" },
  { label: "Email", href: "mailto:monica.j.nc19@gmail.com", display: "monica.j.nc19@gmail.com" },
];

function ResumeBlock({ entry }: { entry: ResumeEntry }) {
  return (
    <div className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
      <div>
        <p className="font-medium text-foreground text-sm">{entry.org}</p>
        <p className="text-muted-fg text-xs mt-0.5">{entry.period}</p>
        <p className="text-muted-fg text-xs">{entry.location}</p>
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
        <a
          href="/resume/monica-jin-resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-accent transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download PDF
        </a>
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
        <div className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
          <div>
            <p className="font-medium text-foreground text-sm">North Carolina State University</p>
            <p className="text-muted-fg text-xs mt-0.5">Expected graduation — May 2027</p>
            <p className="text-muted-fg text-xs">Raleigh, NC</p>
          </div>
          <div>
            <p className="font-display font-medium text-foreground text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              B.S. Computer Science · Minor in Art & Design
            </p>
            <p className="text-sm text-muted-fg leading-relaxed">GPA 4.0</p>
            <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {["Data Structures", "Algorithms", "Operating Systems", "Intro to AI", "Computer Graphics"].map((c) => (
                <span key={c} className="text-xs text-muted-fg px-2.5 py-1 rounded-full bg-muted">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2 text-second">Experience</p>
        {experience.map((entry) => (
          <ResumeBlock key={entry.org} entry={entry} />
        ))}
      </section>

      {/* Projects */}
      <section className="mt-4">
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2 text-second">Projects</p>
        {resumeProjects.map((p) => (
          <div key={p.title} className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
            <div>
              <p className="font-medium text-foreground text-sm">{p.title}</p>
              <p className="text-muted-fg text-xs mt-0.5">{p.tools}</p>
            </div>
            <div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium tracking-widest uppercase text-accent hover:text-foreground transition-colors duration-200 mb-3"
                >
                  GitHub →
                </a>
              )}
              <ul className="space-y-2">
                {p.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0 text-xs">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-4">
        <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2 text-second">Technical Skills</p>
        <div className="py-8 border-t border-border grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10">
          <div><p className="text-muted-fg text-xs">By category</p></div>
          <div className="space-y-4">
            {skillCategories.map(({ category, items }) => (
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
