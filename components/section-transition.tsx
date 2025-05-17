"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SectionTransition({ children, className = "", delay = 0 }: SectionTransitionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.6,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
