import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This page went missing.
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        The project or page you&apos;re looking for doesn&apos;t exist — or it moved
        somewhere better.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
      >
        <ArrowLeft className="size-4 transition group-hover:-translate-x-0.5" />
        Back home
      </Link>
    </main>
  );
}
