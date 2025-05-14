"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function useScrollTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only run this on the home page
    if (pathname !== "/") return

    // Check if there's a hash in the URL
    const hash = window.location.hash

    // If there's no hash, scroll to the top
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    // If there is a hash, the browser will handle scrolling to that section
  }, [pathname, searchParams])
}
