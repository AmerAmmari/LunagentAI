"use client"

import { useEffect, useState } from "react"

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const listener = () => {
        setPrefersReducedMotion(mediaQuery.matches)
      }

      mediaQuery.addEventListener("change", listener)

      return () => {
        mediaQuery.removeEventListener("change", listener)
      }
    }
  }, [])

  return prefersReducedMotion
}
