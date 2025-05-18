"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { MotionProps } from "framer-motion"

interface AnimateInViewProps extends MotionProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
  animation?: "fadeIn" | "fadeInUp" | "fadeInRight" | "fadeInLeft" | "scale" | "none"
}

export default function AnimateInView({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
  animation = "fadeInUp",
  ...props
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  // Define animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    none: {
      hidden: {},
      visible: {},
    },
  }

  const selectedVariant = variants[animation]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
