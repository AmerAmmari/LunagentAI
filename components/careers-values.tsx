"use client"

import { Lightbulb, Users, Zap, Globe, Heart, Shield } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function CareersValues() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
      title: "Innovation",
      description: "We push boundaries and challenge the status quo to create cutting-edge AI solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Collaboration",
      description: "We believe the best ideas come from diverse teams working together toward common goals.",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Impact",
      description: "We're driven by creating meaningful change for our clients and the world through AI.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Inclusivity",
      description: "We foster an environment where everyone's voice is heard and valued.",
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: "Well-being",
      description: "We prioritize the health, happiness, and growth of our team members.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all aspects of our work.",
    },
  ]

  return (
    <section id="values" className="py-20 bg-white dark:bg-gray-950 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Drives Us Forward</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape our culture and guide every decision we make.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={i} delay={i * 100 + 200}>
              <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-fit mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{value.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
