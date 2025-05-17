"use client"

import Link from "next/link"
import { Heart, Building, ShoppingBag, Factory, GraduationCap, BarChart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"
import { Button } from "@/components/ui/button"

export default function UseCasesSection() {
  const { t } = useLanguage()

  const useCases = [
    {
      icon: <Heart className="h-10 w-10 text-theme-primary" />,
      title: t("industry1Title"),
      description: t("industry1Description"),
      href: "/industries/healthcare",
    },
    {
      icon: <Building className="h-10 w-10 text-theme-primary" />,
      title: t("industry2Title"),
      description: t("industry2Description"),
      href: "/industries/finance",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-theme-primary" />,
      title: t("industry3Title"),
      description: t("industry3Description"),
      href: "/industries/retail",
    },
    {
      icon: <Factory className="h-10 w-10 text-theme-primary" />,
      title: t("industry4Title"),
      description: t("industry4Description"),
      href: "/industries/manufacturing",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-theme-primary" />,
      title: t("industry5Title"),
      description: t("industry5Description"),
      href: "/industries/education",
    },
    {
      icon: <BarChart className="h-10 w-10 text-theme-primary" />,
      title: t("industry6Title"),
      description: t("industry6Description"),
      href: "/industries/marketing",
    },
  ]

  return (
    <SectionTransition id="use-cases" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
              {t("useCasesTitle")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("useCasesSubtitle")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t("useCasesDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Link
              key={index}
              href={useCase.href}
              className="group flex flex-col items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-theme-primary dark:hover:border-theme-primary transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 mb-4 group-hover:bg-theme-primaryLight dark:group-hover:bg-theme-primary/30 transition-colors duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-theme-primary transition-colors duration-300">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
              <Button
                variant="link"
                className="mt-auto text-theme-primary hover:text-theme-primaryDark p-0 h-auto font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
