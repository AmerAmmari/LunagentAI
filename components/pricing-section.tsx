"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"

export default function PricingSection() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t("starter"),
      price: t("starterPrice"),
      description: t("starterDescription"),
      features: [
        "AI-powered analytics dashboard",
        "Basic reporting tools",
        "5 user accounts",
        "Email support",
        "Weekly data updates",
      ],
      cta: t("getStarted"),
      popular: false,
    },
    {
      name: t("professional"),
      price: t("professionalPrice"),
      description: t("professionalDescription"),
      features: [
        "Everything in Starter",
        "Advanced analytics and insights",
        "20 user accounts",
        "Priority support",
        "Daily data updates",
        "Custom integrations",
      ],
      cta: t("getStarted"),
      popular: true,
    },
    {
      name: t("enterprise"),
      price: t("enterprisePrice"),
      description: t("enterpriseDescription"),
      features: [
        "Everything in Professional",
        "Unlimited user accounts",
        "Dedicated account manager",
        "Real-time data updates",
        "Custom AI model training",
        "On-premise deployment options",
        "24/7 phone and email support",
      ],
      cta: t("contactSales"),
      popular: false,
    },
  ]

  return (
    <SectionTransition
      id="pricing"
      className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark relative overflow-hidden"
    >
      {/* Add subtle cyan gradient spots in the background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[15%] w-[30%] h-[30%] rounded-full opacity-20 blur-[80px] bg-cyan-300 dark:bg-cyan-700" />
        <div className="absolute bottom-[15%] left-[10%] w-[25%] h-[25%] rounded-full opacity-15 blur-[60px] bg-cyan-200 dark:bg-cyan-800" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
              {t("pricingTitle")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("pricingSubtitle")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              {t("pricingDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group flex flex-col p-8 rounded-lg h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-4px] bg-white dark:bg-gray-800 ${
                plan.popular
                  ? "border-2 border-theme-primary dark:border-theme-primary shadow-md hover:shadow-xl"
                  : "border border-gray-200 dark:border-gray-800 hover:border-theme-primary dark:hover:border-theme-primary"
              }`}
            >
              {plan.popular && (
                <div className="py-1 px-4 bg-theme-primary text-white text-sm font-medium rounded-full self-start mb-4">
                  {t("mostPopular")}
                </div>
              )}
              <h3 className="text-2xl font-bold group-hover:text-theme-primary transition-colors duration-300">
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold group-hover:text-theme-primary transition-colors duration-300">
                  {plan.price}
                </span>
                {plan.price !== t("enterprisePrice") && (
                  <span className="text-gray-500 dark:text-gray-400">{t("month")}</span>
                )}
              </div>
              <p className="text-gray-600 mb-6 dark:text-gray-300">{plan.description}</p>
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-theme-primary mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-auto transition-all duration-300 ${
                  plan.popular
                    ? "bg-theme-primary hover:bg-theme-primaryDark text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 group-hover:bg-theme-primary group-hover:hover:bg-theme-primaryDark"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
