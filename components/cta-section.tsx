"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"

export default function CtaSection() {
  const { t } = useLanguage()

  return (
    <SectionTransition id="contact" className="py-16 md:py-24 bg-theme-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-2">
              {t("ctaTitle")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("ctaSubtitle")}</h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">{t("ctaDescription")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-white hover:bg-gray-100 text-theme-primary">{t("scheduleDemo")}</Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-gray-200"
            >
              {t("contactSales")}
            </Button>
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
