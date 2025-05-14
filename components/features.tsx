"use client"

import { Brain, BarChart3, Zap, Users } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function Features() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-purple-600" />,
      title: "AI-Powered Insights",
      description: "Leverage advanced machine learning algorithms to extract actionable insights from your data.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-purple-600" />,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with our predictive modeling tools.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-600" />,
      title: "Process Automation",
      description: "Streamline operations by automating repetitive tasks with intelligent workflows.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Custom AI Solutions",
      description: "Tailored AI implementations designed specifically for your business needs and goals.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful AI Solutions for Your Business
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive suite of AI tools helps businesses of all sizes transform their operations and drive
                growth.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-12">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={i * 100 + 200}>
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 hover:scale-[1.02] duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-2">{feature.icon}</div>
                <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
