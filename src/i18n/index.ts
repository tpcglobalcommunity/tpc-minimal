import React from "react";
import en from "./en";
import id from "./id";

export type Lang = "en" | "id";
type Dict = Record<string, string>;

const DICTS: Record<Lang, Dict> = { en, id };

type I18nValue = {
  lang: Lang;
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = React.createContext<I18nValue | null>(null);

export function I18nProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const dict = DICTS[lang] ?? DICTS.en;

  const t: I18nValue["t"] = (key, vars) => {
    let s = dict[key] ?? DICTS.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = s.replaceAll(`{${k}}`, String(v));
      }
    }
    return s;
  };

  return React.createElement(
    I18nContext.Provider,
    { value: { lang, t } },
    children
  );
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
