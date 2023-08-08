"use client"
import {Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export interface AccordionProps {
  label: string;
  content: string;
}

const Accordion = ({accordion, expanded, setExpanded, index}: { accordion: AccordionProps } & {
  expanded: number | false;
  setExpanded: Dispatch<SetStateAction<number | false>>;
  index: number;
}) => {
  const {label, content} = accordion
  const isOpen = index === expanded;

  return (
    <div className={`accordion ${isOpen ? "is-open" : ""}`}>
      <motion.div
        className={"accordion-header"}
        animate={{backgroundColor: isOpen ? "#6163FF" : "#25232A"}}
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        {label}
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {opacity: 1, height: "auto"},
              collapsed: {opacity: 0, height: 0}
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={"accordion-content-wrapper"}
          >
            <div className={"accordion-content"}>
              <p>{content}</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export const AccordionList = ({accordions}: { accordions: AccordionProps[] }) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  useEffect(() => {
    setExpanded(false)
  }, [accordions])

  return (
    <div className={"accordion-list"}>
      {accordions.map((accordion, index) => {
        return (
          <Accordion accordion={accordion}
                     expanded={expanded}
                     setExpanded={setExpanded}
                     index={index}
                     key={`accordion-${index}`}
          />
        )
      })}
    </div>
  )
}