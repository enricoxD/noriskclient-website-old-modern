"use client"
import {motion} from "framer-motion";
import {ComponentProps} from "react";

interface AnimationProps extends ComponentProps<"div"> {
  animation: "slideInLeft" | "slideInRight" | "slideInBottom" | "scaleIn"
}

export const slideInLeft = {
  visible: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: -100,
    opacity: 0
  }
}

export const slideInRight = {
  visible: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: 100,
    opacity: 0
  }
}

const slideInBottom = {
  visible: {
    y: 0,
    opacity: 1
  },
  hidden: {
    y: 100,
    opacity: 0
  }
}

const scaleIn = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0.5,
    opacity: 0
  }
}

export const Animation = ({animation, children}: AnimationProps) => {
  const variants = getAnimationVariants()

  function getAnimationVariants() {
    if (animation == "slideInLeft") return slideInLeft
    else if (animation == "slideInRight") return slideInRight
    else if (animation == "slideInBottom") return slideInBottom
    else return scaleIn
  }

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