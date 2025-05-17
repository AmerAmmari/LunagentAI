"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Mount check to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle hash navigation after page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash && pathname === "/") {
        // Wait for page to fully load
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Navigate to home page without hash
    router.push("/")
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCareerClick = (e: React.MouseEvent) => {
    // Don't prevent default - let the link work normally
    // Close mobile menu if open
    if (isOpen) setIsOpen(false)
    // Scroll to top after navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" })
    }, 100)
  }

  // Update the handleSectionClick function to properly navigate to sections
  const handleSectionClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isOpen) setIsOpen(false)

    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      // Navigate to home page with the hash
      router.push(`/${href}`)
    } else {
      // If already on home page, just scroll to the section
      const sectionId = href.substring(1) // Remove the # from the href
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleIndustryClick = (e: React.MouseEvent, industry: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isOpen) setIsOpen(false)

    // Navigate to the industry page
    router.push(`/industries/${industry.toLowerCase()}`)

    // Scroll to top after navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" })
    }, 100)
  }

  const navLinks = [
    { name: t("ourProcess"), href: "#process" },
    { name: t("features"), href: "#features" },
    {
      name: t("industries"),
      href: "#industries",
      isAnimated: true,
      isDropdown: true,
      dropdownItems: [
        { name: t("industry1Title"), href: "healthcare" },
        { name: t("industry2Title"), href: "finance" },
        { name: t("industry3Title"), href: "retail" },
        { name: t("industry4Title"), href: "manufacturing" },
        { name: t("industry5Title"), href: "education" },
        { name: t("industry6Title"), href: "marketing" },
      ],
    },
    { name: t("testimonials"), href: "#testimonials" },
    { name: t("pricing"), href: "#pricing" },
    { name: t("careers"), href: "/careers", isPage: true },
    { name: t("contact"), href: "#contact", isAnimated: true },
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
              <Image src="/images/logo.png" alt="Zentropic AI Logo" width={32} height={32} className="h-8 w-auto" />
              <span
                className={`text-xl font-bold ${isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"}`}
              >
                Zentropic AI
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
                {link.isPage ? (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative ${
                      isScrolled
                        ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    } after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-theme-primary after:transition-all hover:after:w-full`}
                    onClick={handleCareerClick}
                  >
                    {link.isAnimated ? (
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={language}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                        </motion.span>
                      </AnimatePresence>
                    ) : (
                      link.name
                    )}
                  </Link>
                ) : link.isDropdown ? (
                  <div className="relative group">
                    <button
                      className={`text-sm font-medium transition-colors relative ${
                        isScrolled
                          ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      } after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-theme-primary after:transition-all hover:after:w-full flex items-center`}
                      onClick={(e) => handleSectionClick(e, link.href)}
                    >
                      {link.isAnimated ? (
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={language}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.name}
                          </motion.span>
                        </AnimatePresence>
                      ) : (
                        link.name
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {link.dropdownItems?.map((item, index) => (
                          <button
                            key={index}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            onClick={(e) => handleIndustryClick(e, item.href)}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    className={`text-sm font-medium transition-colors relative ${
                      isScrolled
                        ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    } after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-theme-primary after:transition-all hover:after:w-full`}
                    scroll={pathname === "/"}
                  >
                    {link.isAnimated ? (
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={language}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                        </motion.span>
                      </AnimatePresence>
                    ) : (
                      link.name
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className={
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }
                aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
              >
                {mounted ? (
                  <span className="font-medium text-sm">{language === "en" ? "FR" : "EN"}</span>
                ) : (
                  <div className="h-5 w-5" />
                )}
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )
                ) : (
                  <div className="h-5 w-5" />
                )}
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <Button className="bg-theme-primary hover:bg-theme-primaryDark text-white">{t("getStarted")}</Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={
                isScrolled
                  ? "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.isPage ? (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                    onClick={handleCareerClick}
                  >
                    {link.name}
                  </Link>
                ) : link.isDropdown ? (
                  <div className="space-y-2">
                    <button
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center justify-between w-full"
                      onClick={(e) => handleSectionClick(e, link.href)}
                    >
                      {link.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div className="pl-4 space-y-2 border-l border-gray-200 dark:border-gray-700">
                      {link.dropdownItems?.map((item, index) => (
                        <button
                          key={index}
                          className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          onClick={(e) => handleIndustryClick(e, item.href)}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors block"
                    scroll={pathname === "/"}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
              >
                {mounted ? (
                  <span className="font-medium">{language === "en" ? "FR" : "EN"}</span>
                ) : (
                  <div className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )
                ) : (
                  <div className="h-5 w-5" />
                )}
              </Button>

              <Button className="bg-theme-primary hover:bg-theme-primaryDark text-white">{t("getStarted")}</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
