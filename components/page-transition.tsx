"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

// Simplify the page transition animation
// Use simpler animations with fewer properties
const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
}

export default function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname()

  // Add a check for reduced motion preference
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={variants} initial="hidden" animate="enter" exit="exit" className={className}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
