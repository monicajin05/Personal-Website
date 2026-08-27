import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-medium text-foreground tracking-tight hover:text-accent transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Home
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {[
            { to: "/", label: "Work" },
            { to: "/gallery", label: "Art" },
            { to: "/about", label: "About" },
            { to: "/resume", label: "Resume" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted-fg hover:text-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
