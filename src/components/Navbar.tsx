"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { LOCALES } from "@/lib/content";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type NavKey =
  | "about"
  | "experience"
  | "education"
  | "languages"
  | "skills"
  | "volunteer"
  | "contact";
  

export function Navbar() {
  const { locale, setLocale, t, isTranslating } = useLanguage();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(
    () =>
      [
        ["about", t.nav.items.about],
        ["experience", t.nav.items.experience],
        ["education", t.nav.items.education],
        ["languages", t.nav.items.languages],
        ["skills", t.nav.items.skills],
        ["volunteer", t.nav.items.volunteer],
        ["contact", t.nav.items.contact],
      ] as Array<[NavKey, string]>,
    [t]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const downloadPDF = async () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    window.print();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        scrolled
          ? "border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "border-transparent bg-white"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("top");
            }}
            className="rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2"
          >
            {t.nav.name}
          </a>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {items.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(id);
                }}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-2xl bg-slate-50 p-1 ring-1 ring-slate-200 md:flex">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLocale(l.code)}
                  className={cn(
                    "rounded-xl px-2.5 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                    locale === l.code
                      ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {isTranslating ? (
              <span className="hidden rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100 md:inline-flex">
                {t.nav.translating}
              </span>
            ) : null}

            <Button
              onClick={downloadPDF}
              variant="secondary"
              className="hidden md:inline-flex"
              ariaLabel={t.nav.downloadCv}
            >
              <Download className="h-4 w-4" />
              {t.nav.downloadCv}
            </Button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={
                open
                  ? t.nav.closeMenu
                  : t.nav.openMenu
              }
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="border-t border-slate-200/70 bg-white md:hidden"
          >
            <Container>
              <div className="py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 rounded-2xl bg-slate-50 p-1 ring-1 ring-slate-200">
                    {LOCALES.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => setLocale(l.code)}
                        className={cn(
                          "rounded-xl px-2.5 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                          locale === l.code
                            ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                            : "text-slate-600 hover:text-slate-900"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>

                  <Button
                    onClick={downloadPDF}
                    variant="secondary"
                    ariaLabel={t.nav.downloadCv}
                  >
                    <Download className="h-4 w-4" />
                    {t.nav.downloadCv}
                  </Button>
                </div>

                {isTranslating ? (
                  <p className="mt-3 text-xs font-semibold text-teal-700">
                    {t.nav.translating}
                  </p>
                ) : null}

                <div className="mt-4 grid gap-1">
                  {items.map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToId(id);
                        setOpen(false);
                      }}
                      className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}