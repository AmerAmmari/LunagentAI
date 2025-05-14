"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import AnimatedSection from "./animated-section"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const { language } = useLanguage()
  const t = getTranslation(language)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900"
    >
      {/* Decorative elements with lower z-index */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-300/50 dark:bg-purple-700/50 rounded-full blur-3xl z-0"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/50 dark:bg-purple-700/50 rounded-full blur-3xl z-0"></div>

      <div className="absolute inset-0 bg-texture opacity-50 z-[1]"></div>
      <div className="container px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {isMounted && (
            <>
              <AnimatedSection delay={100}>
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    {t.hero.title}
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">{t.hero.subtitle}</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-col gap-4 sm:flex-row justify-center mt-8">
                  <Link href="/contact">
                    <Button className="bg-purple-600 hover:bg-purple-700 transition-all text-white dark:text-white px-8 py-6 text-lg">
                      {t.hero.getStarted}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 hover:text-purple-900 transition-all px-8 py-6 text-lg"
                    >
                      {t.hero.bookDemo}
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <div className="flex items-center justify-center space-x-4 text-sm mt-12">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center"
                      >
                        <span className="text-xs font-medium text-gray-600">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {t.hero.trustedBy} <span className="font-medium text-gray-900 dark:text-gray-200">500+</span>{" "}
                    {t.hero.companies}
                  </div>
                </div>
              </AnimatedSection>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
