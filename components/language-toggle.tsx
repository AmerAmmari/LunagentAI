"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { useEffect, useState } from "react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9">
        EN
        <span className="sr-only">Toggle language</span>
      </Button>
    )
  }

  function toggleLanguage() {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 border-purple-200 dark:border-purple-800"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {language === "en" ? "EN" : "FR"}
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
