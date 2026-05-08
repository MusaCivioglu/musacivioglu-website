"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" title={t.education.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.education.items.map((ed) => (
          <motion.div
            key={ed.school}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {ed.school}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700">{ed.program}</p>
                  <p className="mt-3 text-sm font-medium text-slate-500">
                    {ed.date}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-600">{t.education.note}</p>
    </Section>
  );
}

