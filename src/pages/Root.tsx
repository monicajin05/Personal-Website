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
      <footer className="border-t border-border px-6 md:px-12 py-5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs text-muted-fg">© 2025 Monica Jin</span>
          <div className="flex items-center gap-6">
            <a href="mailto:monicajnc19@gmail.com" className="text-xs text-muted-fg hover:text-accent transition-colors duration-200">
              monicajnc19@gmail.com
            </a>
            <a href="https://github.com/monicajnc19" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-fg hover:text-accent transition-colors duration-200">
              GitHub
            </a>
            <a href="https://linkedin.com/in/monicajin" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-fg hover:text-accent transition-colors duration-200">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
