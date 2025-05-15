"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useRouter, usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { theme } = useTheme()
  const { language } = useLanguage()
  const t = getTranslation(language)
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Special case for careers link when already on careers page
    if (href === "/careers" && pathname === "/careers") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // Navigate to the specified href
    router.push(href)
  }

  // Determine background color based on theme
  const getBackgroundColor = () => {
    if (!mounted) return {}
    return {
      backgroundColor: theme === "dark" ? "rgb(17 24 39)" : "rgb(255 255 255)",
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-950/80 dark:border-gray-800 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavigation(e, "/#hero")}>
            <div className="h-14 w-14 relative">
              <Image src="/LunagentAI/logonoBG.png" alt="Lunagent AI Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold">Lunagent AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#business-process"
            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            onClick={(e) => handleNavigation(e, "/#business-process")}
          >
            {t.nav.ourProcess}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            onClick={(e) => handleNavigation(e, "/#features")}
          >
            {t.nav.features}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/#industries"
            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            onClick={(e) => handleNavigation(e, "/#industries")}
          >
            {t.nav.industries}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            onClick={(e) => handleNavigation(e, "/#testimonials")}
          >
            {t.nav.testimonials}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            onClick={(e) => handleNavigation(e, "/#pricing")}
          >
            {t.nav.pricing}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/careers"
            className={`text-sm font-medium hover:text-purple-600 transition-colors relative group ${
              pathname === "/careers" ? "text-purple-600" : ""
            }`}
            onClick={(e) => handleNavigation(e, "/careers")}
          >
            {t.nav.careers}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-purple-600 transition-colors relative group ${
              pathname === "/contact" ? "text-purple-600" : ""
            }`}
            onClick={(e) => handleNavigation(e, "/contact")}
          >
            {t.nav.contact}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
          <Link href="/contact">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 transition-all text-white dark:text-white">
              {t.nav.getStarted}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-50 shadow-lg ${
          isMenuOpen ? "!opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        } transition-transform duration-300 ease-in-out`}
        style={{
          ...getBackgroundColor(),
          opacity: isMenuOpen ? 1 : 0, // Inline style for immediate opacity
          transition: "transform 300ms ease-in-out, opacity 150ms ease-in-out", // Faster opacity transition
        }}
      >
        <nav
          className="flex flex-col gap-4 p-4"
          style={{
            backgroundColor: theme === "dark" ? "rgb(17 24 39)" : "rgb(255 255 255)",
          }}
        >
          <Link
            href="/#business-process"
            className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            onClick={(e) => handleNavigation(e, "/#business-process")}
          >
            {t.nav.ourProcess}
          </Link>
          <Link
            href="/#features"
            className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            onClick={(e) => handleNavigation(e, "/#features")}
          >
            {t.nav.features}
          </Link>
          <Link
            href="/#industries"
            className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            onClick={(e) => handleNavigation(e, "/#industries")}
          >
            {t.nav.industries}
          </Link>
          <Link
            href="/#testimonials"
            className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            onClick={(e) => handleNavigation(e, "/#testimonials")}
          >
            {t.nav.testimonials}
          </Link>
          <Link
            href="/#pricing"
            className="text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md transition-colors"
            onClick={(e) => handleNavigation(e, "/#pricing")}
          >
            {t.nav.pricing}
          </Link>
          <Link
            href="/careers"
            className={`text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors ${
              pathname === "/careers"
                ? "text-purple-600 bg-gray-100 dark:bg-gray-900"
                : "text-gray-900 dark:text-gray-100"
            }`}
            onClick={(e) => handleNavigation(e, "/careers")}
          >
            {t.nav.careers}
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors ${
              pathname === "/contact"
                ? "text-purple-600 bg-gray-100 dark:bg-gray-900"
                : "text-gray-900 dark:text-gray-100"
            }`}
            onClick={(e) => handleNavigation(e, "/contact")}
          >
            {t.nav.contact}
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-center gap-4 mb-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Link href="/contact">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.getStarted}
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
