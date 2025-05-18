"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is applied after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider {...props} enableSystem={true} enableColorScheme={true} storageKey="theme">
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </NextThemesProvider>
  )
}
