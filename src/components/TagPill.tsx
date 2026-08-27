interface TagPillProps {
  label: string;
  variant?: "default" | "accent";
}

export default function TagPill({ label, variant = "default" }: TagPillProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium tracking-wide bg-accent text-accent-fg">
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium tracking-wide bg-muted text-muted-fg border border-border">
      {label}
    </span>
  );
}
