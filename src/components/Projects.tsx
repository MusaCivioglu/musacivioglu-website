"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Video } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

const icons = [Building2, GraduationCap, Video];

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {t.projects.items.map((p, idx) => {
          const Icon = icons[idx] ?? Building2;
          return (
            <motion.div
              key={p.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

