"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#mission", label: "Our Mission" },
  { href: "#team", label: "Who are we?" },
  { href: "#workshops", label: "Workshops" },
  { href: "#podcast", label: "Podcast" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 h-16">
        <Link href="/">
          <Image
            src="/logo/logo-black.png"
            alt="Tri2Thrive"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-neutral-400 hover:text-primary-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-primary-800"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <><line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" /></>
            ) : (
              <><line x1="2" y1="5" x2="18" y2="5" /><line x1="2" y1="10" x2="18" y2="10" /><line x1="2" y1="15" x2="18" y2="15" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-b border-neutral-100 px-6 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm text-neutral-400 hover:text-primary-800 transition-colors"
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
