"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title}>
      <div className="grid gap-4">
        {t.experience.items.map((it) => {
          const note = ("note" in it ? it.note : undefined) as
            | string
            | undefined;
          return (
          <motion.div
            key={`${it.role}-${it.company}`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {it.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      {it.company}
                    </span>
                    {it.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {it.location}
                      </span>
                    ) : null}
                    {it.date ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        {it.date}
                      </span>
                    ) : null}
                  </div>
                  {note ? <p className="mt-3 text-sm text-slate-600">{note}</p> : null}
                </div>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-600/70" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        );
        })}
      </div>
    </Section>
  );
}

