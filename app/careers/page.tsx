"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CareersHero from "@/components/careers-hero"
import CareersValues from "@/components/careers-values"
import CareersOpenings from "@/components/careers-openings"
import CareersCta from "@/components/careers-cta"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function CareersPage() {
  const searchParams = useSearchParams()

  // Handle scroll behavior for the careers page
  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash

    // If there's a scroll-to-top parameter or no hash, scroll to the top
    if (searchParams.has("scrollToTop") || !hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
    }
    // If there is a hash, the browser will handle scrolling to that section
  }, [searchParams])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 bg-texture">
      <Header />
      <main>
        <CareersHero />
        <CareersValues />
        <CareersOpenings />
        <CareersCta />
      </main>
      <Footer />
    </div>
  )
}
