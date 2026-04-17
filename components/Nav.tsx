"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-semibold text-base tracking-tight text-foreground">
          Ken Badertscher
        </span>
        <a
          href="mailto:ken@kenb.dev"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ken@kenb.dev
        </a>
      </nav>
    </header>
  );
}
