import { en } from "./en"
import { fr } from "./fr"

export type Language = "en" | "fr"

export const translations = {
  en,
  fr,
}

export function getTranslation(language: Language) {
  return translations[language]
}
