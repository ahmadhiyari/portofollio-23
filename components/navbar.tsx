"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight } from "@/components/icons";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-ink transition group-hover:rotate-6">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {profile.name}
            <span className="block text-[11px] font-normal text-muted">
              {profile.role}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-surface hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent hover:text-accent-ink sm:flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg px-5 py-4 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-muted transition hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl bg-accent px-3 py-3 text-sm font-medium text-accent-ink"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
