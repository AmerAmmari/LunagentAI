"use client"

import { Heart, Building, ShoppingBag, Factory, GraduationCap, BarChart } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"

export default function IndustriesSection() {
  const { t } = useLanguage()

  const industries = [
    {
      icon: <Heart className="h-6 w-6 text-theme-primary" />,
      title: t("industry1Title"),
      description: t("industry1Description"),
    },
    {
      icon: <Building className="h-6 w-6 text-theme-primary" />,
      title: t("industry2Title"),
      description: t("industry2Description"),
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-theme-primary" />,
      title: t("industry3Title"),
      description: t("industry3Description"),
    },
    {
      icon: <Factory className="h-6 w-6 text-theme-primary" />,
      title: t("industry4Title"),
      description: t("industry4Description"),
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-theme-primary" />,
      title: t("industry5Title"),
      description: t("industry5Description"),
    },
    {
      icon: <BarChart className="h-6 w-6 text-theme-primary" />,
      title: t("industry6Title"),
      description: t("industry6Description"),
    },
  ]

  return (
    <SectionTransition
      id="industries"
      className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark relative overflow-hidden"
    >
      {/* Add subtle cyan gradient spots in the background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] rounded-full opacity-20 blur-[80px] bg-cyan-300 dark:bg-cyan-700" />
        <div className="absolute bottom-[10%] right-[10%] w-[25%] h-[25%] rounded-full opacity-15 blur-[60px] bg-cyan-200 dark:bg-cyan-800" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
              {t("industriesTitle")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("industriesSubtitle")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              {t("industriesDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12">
          {/* Desktop and tablet view - 3x2 grid (3 on top, 3 on bottom) */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:border-theme-primary dark:hover:border-theme-primary transition-all duration-300 ease-in-out hover:translate-y-[-4px]"
              >
                <div className="w-16 h-16 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mb-5 group-hover:bg-theme-primaryLight dark:group-hover:bg-theme-primary/30 transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-theme-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile view - Carousel */}
          <div className="sm:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {industries.map((industry, index) => (
                  <CarouselItem key={index}>
                    <div className="group flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:border-theme-primary dark:hover:border-theme-primary transition-all duration-300 ease-in-out hover:translate-y-[-4px]">
                      <div className="w-16 h-16 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mb-5 group-hover:bg-theme-primaryLight dark:group-hover:bg-theme-primary/30 transition-colors duration-300">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-theme-primary transition-colors duration-300">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative mr-2" />
                <CarouselNext className="relative" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
