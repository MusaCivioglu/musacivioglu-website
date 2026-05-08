"use client";

import React from "react";
import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Languages() {
  const { t } = useLanguage();

  return (
    <Section id="languages" title={t.languages.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.languages.items.map((l) => (
          <motion.div
            key={l.name}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <LanguagesIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      {l.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{l.level}</p>
                  </div>
                </div>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
                  {l.value}%
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-500"
                  style={{ width: `${l.value}%` }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

