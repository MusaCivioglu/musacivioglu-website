import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  download,
  target,
  rel,
  ariaLabel,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const variants: Record<typeof variant, string> = {
    primary:
      "bg-slate-900 text-white shadow-sm hover:bg-slate-800 active:bg-slate-900",
    secondary:
      "bg-white text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50 active:bg-white",
    ghost: "text-slate-700 hover:bg-slate-100 active:bg-slate-100",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={cls}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          download={download ? "" : undefined}
        >
          {children}
        </a>
      );
    }
    // For downloading a static file from /public, we intentionally use <a>
    // because Next.js <Link> does not reliably forward the `download` attribute.
    // Place `Musa-Civioglu-CV.pdf` in `public/` for the download to work.
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        download={download ? "" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70",
        className
      )}
    >
      {children}
    </div>
  );
}

