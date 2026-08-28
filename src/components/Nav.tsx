import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const navLinks = [
  { to: "/", label: "Work", color: "#5457CF" },
  { to: "/gallery", label: "Art", color: "#E39696" },
  { to: "/about", label: "About", color: "#81C9DF" },
  { to: "/resume", label: "Resume", color: "#F9B8A4" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useDarkMode();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        {/* Logo — four-dot + name */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex gap-[3px]">
            {["#5457CF", "#81C9DF", "#F9B8A4", "#E39696"].map((c) => (
              <div
                key={c}
                className="w-2 h-2 rounded-full transition-transform duration-200 group-hover:scale-125"
                style={{ background: c }}
              />
            ))}
          </div>
          <span
            className="font-display font-medium text-foreground tracking-tight hover:text-accent transition-colors duration-200 ml-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Home
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          {navLinks.map(({ to, label, color }) => {
            const active = isActive(to);
            return (
              <Link
                key={to}
                to={to}
                className="relative px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200"
                style={{
                  color: active ? "#fff" : "var(--muted-fg)",
                  background: active ? color : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = color;
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = "var(--muted-fg)";
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="ml-2 w-8 h-8 flex items-center justify-center rounded-full border border-border hover:border-accent transition-colors duration-200 text-muted-fg hover:text-accent"
          >
            {dark ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.2" />
                <path
                  d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.93 2.93l1.06 1.06M10.01 10.01l1.06 1.06M10.01 3.99l1.06-1.06M2.93 11.07l1.06-1.06"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M11.5 8.5A5.5 5.5 0 0 1 4.5 1.5a5.5 5.5 0 1 0 7 7z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
