"use client"

import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"
import Link from "next/link"

export default function CareersCta() {
  return (
    <section className="py-20 bg-purple-700/80 dark:bg-purple-800/70 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-20"></div>

      {/* Blur overlay with standard backdrop-blur */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Stay Connected With Us
              </h2>
              <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow us on social media to stay updated on company news and future opportunities.
              </p>
            </div>
            <AnimatedSection delay={200} direction="up">
              <div className="mt-6">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 hover:text-purple-900 transition-all px-8 py-6 text-lg"
                  >
                    Learn About Our Company
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
