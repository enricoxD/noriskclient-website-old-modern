"use client"
import {ComponentProps, useRef} from "react";
import Image from "next/image";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ParallaxSection({children, backgroundImage}: {backgroundImage: string} & ComponentProps<"div">) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={`parallax-section`}>
      <div className={"image-wrapper"} ref={ref}>
        <Image src={backgroundImage} className={"background"} alt={"background"} fill />
      </div>
      <motion.h2 style={{ y }}>Hallöchen {backgroundImage.at(4)}</motion.h2>
    </section>
  )
}