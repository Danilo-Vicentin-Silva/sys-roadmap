"use client"

import { motion, HTMLMotionProps, Variants } from "framer-motion"

// Check for reduced motion preference
const shouldReduceMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Fade in with slide up animation variants
const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Scale up with fade in animation variants
const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

// Stagger container variants for sequential child animations
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Simple fade in variants for reduced motion
const simpleFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = "", ...props }: FadeInProps) {
  const reduceMotion = shouldReduceMotion()
  const variants = reduceMotion ? simpleFadeVariants : fadeInUpVariants

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={reduceMotion ? {} : { delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  staggerDelay?: number
  delayChildren?: number
  className?: string
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.2,
  className = "",
  ...props
}: StaggerContainerProps) {
  const reduceMotion = shouldReduceMotion()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reduceMotion ? simpleFadeVariants : staggerContainerVariants}
      transition={reduceMotion ? {} : { staggerChildren: staggerDelay, delayChildren }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className = "", ...props }: StaggerItemProps) {
  const reduceMotion = shouldReduceMotion()
  const variants = reduceMotion ? simpleFadeVariants : scaleInVariants

  return (
    <motion.div
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
