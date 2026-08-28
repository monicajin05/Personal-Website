import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Nav from "../components/Nav";

export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="px-6 md:px-12 pt-8 pb-6">
        {/* Four-color top stripe */}
        <div className="flex h-0.5 max-w-[1400px] mx-auto rounded-full overflow-hidden mb-6">
          <div className="flex-1" style={{ background: "#5457CF" }} />
          <div className="flex-1" style={{ background: "#81C9DF" }} />
          <div className="flex-1" style={{ background: "#F9B8A4" }} />
          <div className="flex-1" style={{ background: "#E39696" }} />
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {["#5457CF", "#81C9DF", "#F9B8A4", "#E39696"].map((c) => (
              <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-1 text-xs text-muted-fg">© 2025 Monica Jin</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:monicajnc19@gmail.com"
              className="text-xs text-muted-fg transition-colors duration-200"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#5457CF")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-fg)")}
            >
              monicajnc19@gmail.com
            </a>
            <a
              href="https://github.com/monicajin05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-fg transition-colors duration-200"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#81C9DF")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-fg)")}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/monicajin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-fg transition-colors duration-200"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F9B8A4")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-fg)")}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
