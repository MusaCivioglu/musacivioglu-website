"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Content, Locale } from "@/lib/content";
import { trContent } from "@/lib/content";
import { translateContent } from "@/lib/translate";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Content;
  isTranslating: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "musa_locale";
const DEFAULT_LOCALE: Locale = "tr";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [t, setT] = useState<Content>(trContent);
  const [isTranslating, setIsTranslating] = useState(false);
  const lastRequestedLocale = useRef<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && ["tr", "en", "it", "es"].includes(stored)) setLocaleState(stored);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  useEffect(() => {
    let cancelled = false;
    lastRequestedLocale.current = locale;

    async function run() {
      if (locale === "tr") {
        setT(trContent);
        setIsTranslating(false);
        return;
      }

      setIsTranslating(true);
      try {
        const translated = await translateContent(trContent, locale);
        if (cancelled) return;
        // If user changed language quickly, ignore stale translation.
        if (lastRequestedLocale.current !== locale) return;
        setT(translated);
      } catch {
        // If translation fails, keep Turkish so UI doesn't break.
        if (!cancelled) setT(trContent);
      } finally {
        if (!cancelled) setIsTranslating(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    return { locale, setLocale, t, isTranslating };
  }, [locale, t, isTranslating]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

