"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import GradientBackground from "@/components/gradient-background"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const { t } = useLanguage()
  const [isAnnual, setIsAnnual] = useState(false)

  // Define monthly and annual pricing
  const pricingData = {
    monthly: {
      starter: "$499",
      professional: "$999",
      enterprise: "Custom",
    },
    annual: {
      starter: "$399",
      professional: "$799",
      enterprise: "Custom",
    },
  }

  // Get current pricing based on billing cycle
  const currentPricing = isAnnual ? pricingData.annual : pricingData.monthly

  const plans = [
    {
      name: t("starter"),
      price: currentPricing.starter,
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
      price: currentPricing.professional,
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
      price: currentPricing.enterprise,
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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <SectionTransition className="relative pt-32 pb-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <GradientBackground intensity="subtle" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-4">
                {t("pricingTitle")}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("pricingSubtitle")}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t("pricingDescription")}</p>
            </div>
          </div>
        </SectionTransition>

        {/* Pricing Section */}
        <SectionTransition className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            {/* Billing Toggle */}
            <div className="flex justify-center items-center mb-12">
              <div className="flex items-center space-x-4">
                <span
                  className={`text-sm font-medium ${!isAnnual ? "text-theme-primary" : "text-gray-500 dark:text-gray-400"}`}
                >
                  Monthly
                </span>
                <div className="flex items-center space-x-2">
                  <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
                  <Label htmlFor="billing-toggle" className="sr-only">
                    Toggle billing cycle
                  </Label>
                </div>
                <div className="flex items-center">
                  <span
                    className={`text-sm font-medium ${isAnnual ? "text-theme-primary" : "text-gray-500 dark:text-gray-400"}`}
                  >
                    Annual
                  </span>
                  <span className="ml-2 inline-block px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs font-medium rounded-full">
                    Save 20%
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* FAQ Section */}
        <SectionTransition className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-none mb-4"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-lg font-bold text-left">What payment methods do you accept?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      We accept all major credit cards, including Visa, Mastercard, and American Express. We also
                      support payment via PayPal and bank transfers for annual plans.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-none mb-4"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-lg font-bold text-left">Can I change my plan later?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new pricing will be
                      applied immediately with prorated charges. When downgrading, the new pricing will take effect at
                      the start of your next billing cycle.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-none mb-4"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-lg font-bold text-left">Is there a free trial available?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your
                      trial, and you can upgrade to a paid plan at any time during or after your trial period.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-none mb-4"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-lg font-bold text-left">What happens if I exceed my user limit?</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      If you need more user accounts than your current plan allows, you can add additional users at a
                      prorated cost. Alternatively, you can upgrade to a higher tier plan that includes more user
                      accounts.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-none mb-4"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-lg font-bold text-left">
                        Do you offer discounts for non-profits or educational institutions?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      Yes, we offer special pricing for qualified non-profit organizations and educational institutions.
                      Please contact our sales team for more information about our discount programs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* CTA Section */}
        <SectionTransition className="py-16 md:py-24 bg-theme-primary text-white">
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
      </main>
      <Footer />
    </div>
  )
}
