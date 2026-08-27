interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeader({ label, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="text-xs font-medium tracking-[0.15em] uppercase" style={{ color: "#4A7C64" }}>
        {label}
      </span>
      <h2
        className="text-3xl md:text-4xl font-display font-light leading-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
    </div>
  );
}
