"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be denied; the email is still visible on screen.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2.5 text-sm text-muted transition hover:border-accent/60 hover:text-ink"
    >
      <span className="font-mono text-xs">{copied ? "Copied!" : email}</span>
      {copied ? (
        <Check className="size-4 text-accent" />
      ) : (
        <Copy className="size-4 opacity-60 transition group-hover:opacity-100" />
      )}
    </button>
  );
}
