"use client";

import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Sparkle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: GraduationCap,
      k: t.about.cards.field.k,
      v: t.about.cards.field.v,
    },
    {
      icon: BriefcaseBusiness,
      k: t.about.cards.business.k,
      v: t.about.cards.business.v,
    },
    {
      icon: Sparkle,
      k: t.about.cards.focus.k,
      v: t.about.cards.focus.v,
    },
  ];

  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {cards.map((c, idx) => (
            <motion.div
              key={c.k}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={idx === 0 ? "sm:col-span-3 lg:col-span-1" : ""}
            >
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{c.k}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {c.v}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

