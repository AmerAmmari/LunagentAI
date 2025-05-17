"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface GradientBackgroundProps {
  className?: string
  intensity?: "none" | "subtle" | "normal" | "strong"
}

export default function GradientBackground({ className = "", intensity = "subtle" }: GradientBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Mount check to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // If intensity is none, return empty div
  if (intensity === "none") {
    return <div className={`absolute inset-0 ${className}`}></div>
  }

  // Set opacity based on intensity
  const opacityMap = {
    subtle: {
      primary: "opacity-10",
      secondary: "opacity-8",
      tertiary: "opacity-6",
    },
    normal: {
      primary: "opacity-20",
      secondary: "opacity-15",
      tertiary: "opacity-10",
    },
    strong: {
      primary: "opacity-30",
      secondary: "opacity-25",
      tertiary: "opacity-20",
    },
  }

  const opacity = opacityMap[intensity]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large gradient blob top right - greatly reduced */}
      <div
        className={`absolute top-[-10%] right-[-5%] w-[25%] h-[25%] rounded-full ${opacity.tertiary} blur-[80px] pulse-animation-slow ${
          theme === "dark" ? "bg-cyan-800/30" : "bg-cyan-300/30"
        }`}
      />

      {/* Medium gradient blob middle left - reduced */}
      <div
        className={`absolute top-[30%] left-[-10%] w-[20%] h-[20%] rounded-full ${opacity.secondary} blur-[70px] pulse-animation-medium ${
          theme === "dark" ? "bg-cyan-700/30" : "bg-cyan-400/30"
        }`}
      />

      {/* Small gradient blob bottom right - reduced */}
      <div
        className={`absolute bottom-[10%] right-[20%] w-[15%] h-[15%] rounded-full ${opacity.primary} blur-[60px] pulse-animation-fast ${
          theme === "dark" ? "bg-cyan-600/30" : "bg-cyan-300/30"
        }`}
      />

      {/* Grid overlay for texture (optional) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
    </div>
  )
}
