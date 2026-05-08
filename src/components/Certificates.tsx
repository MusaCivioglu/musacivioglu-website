"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button, Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Certificates() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof t.certificates.items)[number] | null>(null);

  const certificates = useMemo(() => t.certificates.items, [t.certificates.items]);

  return (
    <Section id="certificates" title={t.certificates.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <motion.div key={c.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <Card className="group h-full overflow-hidden">
              <button
                type="button"
                onClick={() => setActive(c)}
                className="w-full text-left"
                aria-label={`${c.title} görüntüsünü aç`}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  {/* Add certificate images to:
                      `public/certificates/<your-file>.jpg`
                      Then reference them in `src/lib/content.ts` */}
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              </button>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {c.issuer} · <span className="text-slate-500">{c.date}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {c.description}
                </p>

                {c.link && c.link !== "#" ? (
                  <div className="mt-4">
                    <Button
                      href={c.link}
                      variant="secondary"
                      className="w-full justify-center"
                      target="_blank"
                      rel="noreferrer"
                      ariaLabel="Sertifikayı görüntüle"
                    >
                      View Certificate
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                ) : null}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-900/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ y: 16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200"
            >
              <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {active.title}
                  </p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {active.issuer} · {active.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm leading-relaxed text-slate-600">
                  {active.description}
                </p>
                {active.link && active.link !== "#" ? (
                  <div className="mt-4">
                    <Button href={active.link} target="_blank" rel="noreferrer">
                      View Certificate
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

