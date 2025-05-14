"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "./animated-section"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { getTranslation } from "@/lib/translations"

export default function Pricing() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-950 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                {t.pricing.title}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pricing.subtitle}</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.pricing.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Mobile-optimized pricing cards */}
        <div className="mt-12 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 150 + 200}>
              <Card
                className={`flex flex-col ${
                  plan.popular ? "border-purple-600 shadow-lg" : ""
                } dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 ${
                  plan.popular ? "hover:shadow-xl hover:scale-[1.03]" : "hover:shadow-md hover:scale-[1.02]"
                } bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm overflow-hidden h-full`}
              >
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-1 text-sm font-medium rounded-t-md">
                    {plan.popular}
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                  <div className="mt-2 flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-lg sm:text-xl font-semibold">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-2 text-sm sm:text-base line-clamp-3 sm:line-clamp-none">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="/contact" className="w-full">
                    <Button
                      className={`w-full transition-all duration-300 text-sm sm:text-base py-2 h-auto ${
                        plan.popular ? "bg-purple-600 hover:bg-purple-700 text-white dark:text-white" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
