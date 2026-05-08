"use client";

import React from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { Button, Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Contact() {
  const { t } = useLanguage();

  const downloadPDF = async () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    await new Promise((resolve) => setTimeout(resolve, 700));

    window.print();
  };

  return (
    <Section id="contact" title={t.contact.title}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            {t.contact.text}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="mailto:info@puratercume.com" variant="primary">
              <Mail className="h-4 w-4" />
              {t.contact.sendEmail}
            </Button>

            <Button onClick={downloadPDF} variant="secondary">
              <Download className="h-4 w-4" />
              {t.contact.downloadCv}
            </Button>
          </div>
        </div>

        <Card className="p-6">
          <div className="grid gap-6">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {t.contact.emailLabel}
                </p>

                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href="mailto:info@puratercume.com"
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-400"
                  >
                    info@puratercume.com
                  </a>

                  <a
                    href="mailto:civioglum1998@gmail.com"
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-400"
                  >
                    civioglum1998@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                <Phone className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Telefon
                </p>

                <div className="mt-1 flex flex-col gap-1">
                  <a
                    href="tel:+905527401923"
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-400"
                  >
                    +90 552 740 19 23
                  </a>

                  <a
                    href="tel:+905458846211"
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-teal-400"
                  >
                    +90 545 884 62 11
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {t.contact.locationLabel}
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {t.contact.location}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}