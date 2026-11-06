import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-ink">
            {profile.initials}
          </span>
          <div>
            <p className="text-sm font-medium">{profile.name}</p>
            <p className="text-xs text-muted">
              © 2026 · Built with Next.js
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition hover:text-ink"
            >
              {social.label}
              <ArrowUpRight className="size-3" />
            </a>
          ))}
          <Link href="/#contact" className="transition hover:text-ink">
            Contact
          </Link>
          <a href="#" className="transition hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
