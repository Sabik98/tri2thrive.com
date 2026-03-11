"use client";

import { useState } from "react";

const navLinks = [
  { href: "#mission", label: "Our Mission" },
  { href: "#team", label: "Who are we?" },
  { href: "#workshops", label: "Workshops" },
  { href: "#podcast", label: "Podcast" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-800">
      <div className="mx-auto max-w-5xl flex items-center justify-center px-6 h-16">
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-white/70 hover:text-white transition-colors font-medium uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></>
            ) : (
              <><line x1="2" y1="6" x2="22" y2="6" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="18" x2="22" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-primary-800 px-6 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-lg text-white/70 hover:text-white transition-colors font-medium uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
