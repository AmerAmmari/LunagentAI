"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

type LanguageProviderProps = {
  children: ReactNode
  defaultLanguage?: Language
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, defaultLanguage = "en" }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    // Only save to localStorage after initialization to prevent overwriting user preference
    if (isInitialized) {
      // Save language preference to localStorage
      localStorage.setItem("language", language)
      // Update html lang attribute
      document.documentElement.lang = language
    }
  }, [language, isInitialized])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
