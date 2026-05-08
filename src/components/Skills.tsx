"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Briefcase, GraduationCap, Languages as LangIcon } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

const icons = [LangIcon, GraduationCap, Briefcase, BrainCircuit];

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.skills.groups.map((g, idx) => {
          const Icon = icons[idx] ?? LangIcon;
          return (
            <motion.div
              key={g.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {g.title}
                  </h3>
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                  {g.items.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-600/70" />
                      <span className="leading-relaxed">{s}</span>
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

