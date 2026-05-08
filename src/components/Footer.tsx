"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { Container } from "@/components/ui";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200/70 py-10">
      <Container>
        <p className="text-sm text-slate-600">{t.footer.text}</p>
      </Container>
    </footer>
  );
}

