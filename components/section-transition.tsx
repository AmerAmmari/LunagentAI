"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export default function SectionTransition({ children, className = "", delay = 0, id }: SectionTransitionProps) {
  // Respect user's reduced motion preference
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "tween", // Use tween instead of spring for better performance
        duration: 0.4,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
