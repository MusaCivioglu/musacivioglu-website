"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button, Card, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useLanguage();
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.title}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {t.hero.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/Musa-Civioglu-CV.pdf" download ariaLabel={t.hero.ctaDownload}>
                <Download className="h-4 w-4" />
                {t.hero.ctaDownload}
              </Button>
              <Button href="#contact" variant="secondary" ariaLabel={t.hero.ctaContact}>
                <Mail className="h-4 w-4" />
                {t.hero.ctaContact}
                <ArrowRight className="h-4 w-4 opacity-60" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: t.hero.badges.en, tone: "teal" },
                { label: t.hero.badges.it, tone: "slate" },
                { label: t.hero.badges.es, tone: "slate" },
                { label: t.hero.badges.founder, tone: "teal" },
              ].map((b) => (
                <span
                  key={b.label}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
                    b.tone === "teal"
                      ? "bg-teal-50 text-teal-800 ring-teal-100"
                      : "bg-slate-50 text-slate-700 ring-slate-200"
                  )}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          >
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
              {/* soft glow */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(600px_400px_at_50%_35%,rgba(13,148,136,0.22),transparent_60%),radial-gradient(600px_400px_at_30%_70%,rgba(15,23,42,0.10),transparent_55%)] blur-2xl" />

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl ring-1 ring-slate-200">
                  {/* Replace this file with your own image:
                      put it here: `public/profile-photo.jpg`
                      path used in code: `/profile-photo.jpg` */}
                  <div className="relative aspect-[4/5] w-full">
                    {!photoError ? (
                      <Image
                        src="/profile-photo.jpg"
                        alt={t.hero.photoAlt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 420px"
                        className="object-cover"
                        onError={() => setPhotoError(true)}
                        priority
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
                        <div className="text-center">
                          <p className="text-4xl font-semibold tracking-tight">
                            {t.hero.card.initials}
                          </p>
                          <p className="mt-2 text-sm text-white/80">
                            {t.hero.name}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/50" />
                  </div>
                </div>

                {/* small premium info card (overlapping) */}
                <Card className="absolute -bottom-6 left-4 right-4 p-4 sm:left-6 sm:right-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
                      {t.hero.badges.founder}
                    </span>
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      {t.hero.card.langs}
                    </span>
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      {t.hero.card.country}
                    </span>
                  </div>
                </Card>
              </div>

              {/* spacing for the overlapping card */}
              <div className="h-10" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

