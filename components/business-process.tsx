"use client"

import { ArrowRight, Lightbulb, BarChart, Zap } from "lucide-react"
import AnimatedSection from "./animated-section"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

export default function BusinessProcess() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  const icons = [
    <Lightbulb key="lightbulb" className="h-10 w-10 text-purple-600 dark:text-white" />,
    <BarChart key="barchart" className="h-10 w-10 text-purple-600 dark:text-white" />,
    <Zap key="zap" className="h-10 w-10 text-purple-600 dark:text-white" />,
  ]

  return (
    <section id="business-process" className="py-20 bg-white dark:bg-gray-950 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                {t.businessProcess.title}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t.businessProcess.subtitle}
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.businessProcess.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - visible only on desktop */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900/30 hidden md:block"></div>

          {t.businessProcess.steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 200} direction="right">
              <div className="relative mb-16 last:mb-0">
                {/* Redesigned layout for better mobile display */}
                <div className="flex flex-row items-start gap-4 md:gap-8">
                  {/* Step number and icon - now always on the left */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center relative">
                      {/* Smaller icon on mobile */}
                      <div className="scale-75 sm:scale-100">{icons[i]}</div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                        {`0${i + 1}`}
                      </div>
                    </div>
                  </div>

                  {/* Content - takes remaining width */}
                  <div className="flex-1 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 relative text-left bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{step.description}</p>

                    {/* Arrow connector for desktop */}
                    {i < t.businessProcess.steps.length - 1 && (
                      <div className="hidden md:block absolute bottom-0 left-10 transform translate-y-full">
                        <ArrowRight className="h-8 w-8 text-purple-400 transform rotate-90" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile connector line */}
                {i < t.businessProcess.steps.length - 1 && (
                  <div className="flex justify-center md:hidden mt-8 mb-8">
                    <ArrowRight className="h-8 w-8 text-purple-400 transform rotate-90" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
