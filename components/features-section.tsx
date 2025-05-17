"use client"

import { Brain, BarChart, Shield, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"

export default function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-theme-primary" />,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: <BarChart className="h-10 w-10 text-theme-primary" />,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: <Shield className="h-10 w-10 text-theme-primary" />,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
    {
      icon: <Zap className="h-10 w-10 text-theme-primary" />,
      title: t("feature4Title"),
      description: t("feature4Description"),
    },
  ]

  return (
    <SectionTransition id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
              {t("featuresTitle")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("featuresSubtitle")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t("featuresDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800 h-full"
            >
              <div className="p-3 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
