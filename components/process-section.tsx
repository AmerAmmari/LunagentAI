"use client"

import { useRef } from "react"
import { Search, BarChart2, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8 text-white" />,
      title: t("processStep1"),
      description: t("processStep1Description"),
    },
    {
      number: "02",
      icon: <BarChart2 className="h-8 w-8 text-white" />,
      title: t("processStep2"),
      description: t("processStep2Description"),
    },
    {
      number: "03",
      icon: <Zap className="h-8 w-8 text-white" />,
      title: t("processStep3"),
      description: t("processStep3Description"),
    },
  ]

  return (
    <SectionTransition
      id="process"
      ref={sectionRef}
      className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark relative overflow-hidden"
    >
      {/* Add subtle cyan gradient spots in the background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-[30%] h-[30%] rounded-full opacity-20 blur-[80px] bg-cyan-300 dark:bg-cyan-700" />
        <div className="absolute bottom-[5%] left-[5%] w-[25%] h-[25%] rounded-full opacity-15 blur-[60px] bg-cyan-200 dark:bg-cyan-800" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
            {t("processTitle")}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {t("processSubtitle")}
          </h2>
          <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl dark:text-gray-300 mt-4">
            {t("processDescription")}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting the steps */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-theme-primary/30 dark:bg-theme-primary/20"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                {/* Circular icon on the left - increased size, removed pop animation */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-theme-primary flex items-center justify-center shadow-lg mr-6">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-theme-primary font-bold text-xs border border-theme-primary">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
