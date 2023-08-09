"use client"
import {motion, Variants} from "framer-motion";
import {ComponentProps} from "react";

interface AnimationProps extends ComponentProps<"div"> {
  variants: Variants
}

export const slideInLeftVariants: Variants = {
  visible: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: -100,
    opacity: 0
  }
}

export const slideInRightVariants: Variants  = {
  visible: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: 100,
    opacity: 0
  }
}

export const slideInBottomVariants: Variants  = {
  visible: {
    y: 0,
    opacity: 1
  },
  hidden: {
    y: 100,
    opacity: 0
  }
}

export const scaleInVariants: Variants  = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0.5,
    opacity: 0
  }
}

export const Animation = ({variants, children}: AnimationProps) => {
  return (
    <motion.div
      className={"animation"}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1
      }}
      transition={{ duration: 0.35 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}