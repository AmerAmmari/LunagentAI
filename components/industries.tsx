"use client"

import { HeartPulse, BadgeDollarSign, ShoppingBag, Factory, GraduationCap, BarChart } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function Industries() {
  const industries = [
    {
      icon: <HeartPulse className="h-10 w-10 text-purple-600" />,
      title: "Healthcare",
      description:
        "Improve patient outcomes with predictive diagnostics, optimize hospital operations, and accelerate drug discovery through advanced AI algorithms.",
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-purple-600" />,
      title: "Finance",
      description:
        "Enhance fraud detection, automate risk assessment, and deliver personalized financial advice through intelligent data analysis.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-purple-600" />,
      title: "Retail",
      description:
        "Optimize inventory management, personalize customer experiences, and forecast demand patterns to increase sales and customer satisfaction.",
    },
    {
      icon: <Factory className="h-10 w-10 text-purple-600" />,
      title: "Manufacturing",
      description:
        "Implement predictive maintenance, optimize production schedules, and improve quality control through real-time monitoring and analysis.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-purple-600" />,
      title: "Education",
      description:
        "Create personalized learning experiences, automate administrative tasks, and identify at-risk students through intelligent learning systems.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-600" />,
      title: "Marketing",
      description:
        "Target campaigns more effectively, analyze customer sentiment, and optimize content strategy through advanced analytics and AI-driven insights.",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-purple-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Industries</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforming Industries Through AI
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI solutions are designed to address the unique challenges and opportunities across various sectors.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-12">
          {industries.map((industry, i) => (
            <AnimatedSection key={i} delay={i * 100 + 200}>
              <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 hover:scale-[1.02] duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 mb-2">{industry.icon}</div>
                <h3 className="text-xl font-bold dark:text-white">{industry.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{industry.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
