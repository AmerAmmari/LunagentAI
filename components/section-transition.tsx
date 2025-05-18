"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export default function SectionTransition({ children, className = "", delay = 0, id }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.4,
        delay: 0, // Removed delay parameter to ensure no intentional delays
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
