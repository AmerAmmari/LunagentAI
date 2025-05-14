"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollManager() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This will run on initial page load and when pathname/searchParams change
    const hash = window.location.hash

    if (hash) {
      // strip leading "#" and scroll to the element
      const id = hash.substring(1)
      const el = document.getElementById(id)
      if (el) {
        // Add a small delay to ensure the element is properly rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        // fallback if the element isn't found
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else {
      // No hash → always go to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, searchParams])

  // Add a specific handler for page refresh
  useEffect(() => {
    // This will only run on initial page load (refresh)
    const handlePageLoad = () => {
      // Check if this is a page refresh (not a navigation)
      if (performance.navigation && performance.navigation.type === 1) {
        // 1 is TYPE_RELOAD
        window.scrollTo({ top: 0, behavior: "auto" })
      } else if (!window.location.hash) {
        // If there's no hash on initial load, scroll to top
        window.scrollTo({ top: 0, behavior: "auto" })
      }
    }

    // Modern approach using the newer Performance API
    const handleNavigation = (entries) => {
      entries.forEach((entry) => {
        // Check if it's a reload
        if (entry.type === "reload" || (entry.type === "navigate" && !window.location.hash)) {
          window.scrollTo({ top: 0, behavior: "auto" })
        }
      })
    }

    // Try to use the newer Performance API if available
    if (typeof PerformanceObserver !== "undefined") {
      try {
        const observer = new PerformanceObserver((list) => {
          handleNavigation(list.getEntries())
        })
        observer.observe({ type: "navigation", buffered: true })
        return () => observer.disconnect()
      } catch (e) {
        // Fallback to the older method
        window.addEventListener("load", handlePageLoad)
        return () => window.removeEventListener("load", handlePageLoad)
      }
    } else {
      // Fallback for browsers that don't support PerformanceObserver
      window.addEventListener("load", handlePageLoad)
      return () => window.removeEventListener("load", handlePageLoad)
    }
  }, [])

  return null
}
