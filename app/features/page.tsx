"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionTransition from "@/components/section-transition"
import GradientBackground from "@/components/gradient-background"
import { Brain, BarChart, Shield, Zap, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function FeaturesPage() {
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

  const industries = [
    { name: t("industry1Title"), href: "/industries/healthcare" },
    { name: t("industry2Title"), href: "/industries/finance" },
    { name: t("industry3Title"), href: "/industries/retail" },
    { name: t("industry4Title"), href: "/industries/manufacturing" },
    { name: t("industry5Title"), href: "/industries/education" },
    { name: t("industry6Title"), href: "/industries/marketing" },
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
                {t("featuresTitle")}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("featuresSubtitle")}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t("featuresDescription")}</p>
            </div>
          </div>
        </SectionTransition>

        {/* Additional Features Section */}
        <SectionTransition className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Advanced Capabilities</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform offers a comprehensive suite of advanced features designed to transform your business
                operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-theme-primary">Data Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Process vast amounts of data in real-time with our advanced algorithms, enabling faster
                  decision-making and insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Real-time data processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Advanced filtering capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Automated data cleansing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-theme-primary">Predictive Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Leverage machine learning to predict future trends and behaviors, allowing you to stay ahead of market
                  changes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Trend forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Behavior prediction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Risk assessment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-theme-primary">Automation Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automate repetitive tasks and workflows to increase efficiency and reduce human error in your
                  operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Workflow automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Task scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Intelligent triggers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-theme-primary">Integration Capabilities</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Seamlessly connect with your existing tools and systems through our extensive API and integration
                  options.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">API connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Third-party app support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-theme-primaryLightest dark:bg-theme-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <svg className="h-3 w-3 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Custom webhook triggers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Find Out How We Can Help You Section */}
        <SectionTransition className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Find Out How We Can Help You</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Discover tailored AI solutions for your industry or get in touch with our team to discuss your specific
                needs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-theme-primary text-theme-primary hover:bg-theme-primaryLightest dark:hover:bg-theme-primary/20 w-full sm:w-auto"
                    >
                      Explore Industries
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56">
                    {industries.map((industry, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <Link href={industry.href} className="cursor-pointer">
                          {industry.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="bg-theme-primary hover:bg-theme-primaryDark text-white w-full">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Testimonials Section */}
        <SectionTransition className="py-16 md:py-24 bg-theme-cyanBg dark:bg-theme-cyanBgDark">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-theme-primary font-medium text-sm mb-2">
                  {t("testimonialsTitle")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("testimonialsSubtitle")}
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t("testimonialsDescription")}
                </p>
              </div>
            </div>

            <div>
              {/* Desktop view - Grid */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-4 p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800 h-full border border-gray-100 dark:border-gray-700"
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
                        <div className="flex flex-col space-y-4 p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
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
      </main>
      <Footer />
    </div>
  )
}
