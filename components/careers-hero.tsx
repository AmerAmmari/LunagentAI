"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"

export default function CareersHero() {
  const scrollToOpenings = (e: React.MouseEvent) => {
    e.preventDefault()
    const openingsSection = document.getElementById("openings")
    if (openingsSection) {
      openingsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="careershero"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-texture opacity-50"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Join Our Team
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Build the Future of AI with Us
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl max-w-[800px] mx-auto mb-8">
              At Zentropic AI, we're on a mission to transform how businesses leverage artificial intelligence. Join our
              team of innovators, problem-solvers, and visionaries to shape the future of AI technology.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" onClick={scrollToOpenings}>
                <Button className="bg-purple-600 hover:bg-purple-700 transition-all hover:scale-105 text-white">
                  View Openings
                </Button>
              </a>
              <a
                href="#values"
                onClick={(e) => {
                  e.preventDefault()
                  const valuesSection = document.getElementById("values")
                  if (valuesSection) {
                    valuesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Button className="bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 hover:text-purple-900 transition-all hover:scale-105">
                  Learn About Our Culture
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
    </section>
  )
}
