"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimateElementProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function AnimateElement({ children, delay = 0, direction = "up", className = "" }: AnimateElementProps) {
  // Respect user's reduced motion preference
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Define initial and animate states based on direction
  // Only use transform properties for better performance
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, transform: "translateY(20px)" }
      case "down":
        return { opacity: 0, transform: "translateY(-20px)" }
      case "left":
        return { opacity: 0, transform: "translateX(20px)" }
      case "right":
        return { opacity: 0, transform: "translateX(-20px)" }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0, transform: "translateY(20px)" }
    }
  }

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
