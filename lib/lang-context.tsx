"use client"

import React, { createContext, useContext, useState } from "react"
import type { Lang } from "./i18n"
import { translations, type Translations } from "./i18n"

interface LangContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  t: translations.pt,
  toggleLang: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt")

  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"))

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
