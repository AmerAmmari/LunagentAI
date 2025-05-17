"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import ProcessSection from "@/components/process-section"
import FeaturesSection from "@/components/features-section"
import IndustriesSection from "@/components/industries-section"
import UseCasesSection from "@/components/use-cases-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import GradientBackground from "@/components/gradient-background"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SectionTransition
          id="hero"
          className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
        >
          {/* Static gradient background with pulsing animation */}
          <GradientBackground intensity="subtle" />

          {/* Content with increased z-index to appear above the gradient */}
          <div className="container px-4 md:px-6 py-24 md:py-32 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white">
                  {t("heroTitle")}
                  <br />
                  <span className="text-theme-primary">{t("heroSubtitle")}</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl mt-4">
                  {t("heroDescription")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-theme-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-theme-primaryDark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary"
                >
                  {t("getStarted")}
                </a>
                <a
                  href="#process"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white/80 backdrop-blur-sm px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-200 dark:border-gray-800 dark:bg-gray-950/80 dark:text-gray-50 dark:hover:bg-gray-800"
                >
                  {t("learnMore")}
                </a>
              </div>
            </div>
          </div>
        </SectionTransition>
        <ProcessSection />
        <FeaturesSection />
        <IndustriesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
