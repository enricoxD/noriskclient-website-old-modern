"use client"
import {motion, Transition, Variants} from "framer-motion";
import {ComponentProps} from "react";

interface AnimationProps extends ComponentProps<"div"> {
  variants: Variants
  transition?: Transition
}

export const slideInLeftVariants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)"
  },
  hidden: {
    x: -75,
    opacity: 0,
    filter: "blur(5px)"
  }
}

export const slideInRightVariants: Variants  = {
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0)"
  },
  hidden: {
    x: 75,
    opacity: 0,
    filter: "blur(5px)"
  }
}

export const slideInBottomVariants: Variants  = {
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0)"
  },
  hidden: {
    y: 75,
    opacity: 0,
    filter: "blur(5px)"
  }
}

export const scaleInVariants: Variants  = {
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0)"
  },
  hidden: {
    scale: 0.5,
    opacity: 0,
    filter: "blur(5px)"
  }
}

export const Animation = ({variants, transition, children}: AnimationProps) => {
  return (
    <motion.div
      className={"animation"}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1
      }}
      transition={transition ?? { duration: 0.7 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}