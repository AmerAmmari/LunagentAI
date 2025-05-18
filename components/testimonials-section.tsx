"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/components/language-provider"
import SectionTransition from "@/components/section-transition"

export default function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t("testimonial1Quote"),
      name: t("testimonial1Name"),
      title: t("testimonial1Title"),
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("testimonial2Quote"),
      name: t("testimonial2Name"),
      title: t("testimonial2Title"),
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("testimonial3Quote"),
      name: t("testimonial3Name"),
      title: t("testimonial3Title"),
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: t("testimonial4Quote"),
      name: t("testimonial4Name"),
      title: t("testimonial4Title"),
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <SectionTransition id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
              {t("testimonialsTitle")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("testimonialsSubtitle")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t("testimonialsDescription")}
            </p>
          </div>
        </div>

        <div className="mt-12">
          {/* Desktop view - Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800 h-full"
              >
                <p className="text-gray-500 italic dark:text-gray-400 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col space-y-4 p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800">
                      <p className="text-gray-500 italic dark:text-gray-400">"{testimonial.quote}"</p>
                      <div className="flex items-center space-x-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                        </div>
                      </div>
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
