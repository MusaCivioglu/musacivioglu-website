"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui";

export function Volunteer() {
  const { t } = useLanguage();

  return (
    <Section id="volunteer" title={t.volunteer.title}>
      <div className="grid gap-6">
        {t.volunteer.items.map((item, index) => (
          <Card
            key={index}
            className="p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <span className="text-sm font-medium text-teal-600">
                  {item.date}
                </span>
              </div>

              <p className="leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}