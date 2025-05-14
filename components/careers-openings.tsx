"use client"
import AnimatedSection from "./animated-section"
import { Inbox } from "lucide-react"
import { useEffect, useRef } from "react"

export default function CareersOpenings() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Check if the URL has the openings hash
    if (window.location.hash === "#openings" && sectionRef.current) {
      // Scroll to this section
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="openings" ref={sectionRef} className="py-20 bg-purple-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-texture opacity-30"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                Open Positions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Growing Team</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our team.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 text-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Inbox className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">No Open Positions Currently</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              We don't have any open positions at the moment, but we're always interested in connecting with talented
              individuals who are passionate about AI and technology.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                If you're interested in future opportunities at Lunagent AI, please check back later or connect with us
                on social media to stay updated on new openings.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                You can also email your resume to{" "}
                <a href="mailto:careers@lunagent.ai" className="text-purple-600 hover:underline">
                  careers@lunagent.ai
                </a>{" "}
                and we'll keep your information on file for future opportunities.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
