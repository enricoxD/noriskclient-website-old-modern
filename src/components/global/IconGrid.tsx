"use client"
import Icon from "@mdi/react";
import {motion} from "framer-motion";
import {useMediaQuery} from "usehooks-ts";

export interface IconGridEntryProps {
  icon: string;
  title: string;
  text: string;
}

interface EntryProps {
  icon: string;
  title: string;
  text: string;
  index: number;
}

const GridEntry = ({entry}: { entry: EntryProps }) => {
  const {icon, title, text, index} = entry;
  const isMobile = useMediaQuery("(max-width: 768px)")

  const variants = {
    hidden: {
      x: -75,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <motion.div className={"grid-entry section"}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{once: true, amount: 0.4}}
                variants={variants}
                transition={{
                  duration: 0.45,
                  delay: isMobile ? 0.35 : 0.35 * index,
                }}
    >
        <span className={"icon-background"}>
          <Icon path={icon} size={2} color={"#E9E9E9"}/>
        </span>
      <p className={"title"}>{title}</p>
      <p className={"text"}>{text}</p>
    </motion.div>
  )
}

export interface IconGridProps {
  entries: IconGridEntryProps[];
}

export const IconGrid = ({entries}: IconGridProps) => {
  return (
    <>
      <div className={"icon-grid"}>
        {entries.map((entry, index) => {
          return <GridEntry entry={{index: index, ...entry}} key={`entry-${index}`}/>
        })}
      </div>
    </>
  )
}