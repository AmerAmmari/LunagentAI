"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import SectionTransition from "@/components/section-transition"
import GradientBackground from "@/components/gradient-background"

export default function CareersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SectionTransition className="relative pt-24 pb-12 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          {/* Static gradient background with pulsing animation */}
          <GradientBackground />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 font-medium text-sm mb-2">
                  {t("careersTitle")}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                  {t("joinOurTeam")}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                  {t("careersDescription")}
                </p>
              </div>
            </div>
          </div>
        </SectionTransition>

        <SectionTransition className="py-12 bg-theme-cyanBg dark:bg-theme-cyanBgDark" delay={0.2}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 font-medium text-sm mb-2">
                  {t("opportunitiesTitle")}
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{t("currentOpenings")}</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300">{t("noOpenPositions")}</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">{t("getInTouch")}</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">{t("getInTouchDescription")}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </SectionTransition>
      </main>
      <Footer />
    </div>
  )
}
