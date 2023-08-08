"use client"
import {useState} from "react";
import Section from "@/components/global/Section";
import {Textfield} from "@/components/global/Textfield";
import {mdiMagnify} from "@mdi/js";
import {AccordionList, AccordionProps} from "@/components/global/AccordionList";

export const FAQSection = ({accordions}: { accordions: AccordionProps[] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAccordions, setFilteredAccordions] = useState(accordions)

  const handleChange = (event: any) => {
    const inputValue = event.target.value
    setSearchQuery(inputValue);setSearchQuery(event.target.value)

    if (event.target.value.length == 0) {
      setFilteredAccordions(accordions)
      return
    }

    const filtered = accordions.filter((accordion) => {
      return accordion.label.toLowerCase().includes(inputValue.toLowerCase()) || accordion.content.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilteredAccordions(filtered)
  };

  return (
    <Section innerClassName={"faqsection"}>
      <Textfield icon={mdiMagnify} placeholder={"Find your answers!"} onChange={handleChange}/>
      { filteredAccordions.length > 0 ?
        <AccordionList accordions={filteredAccordions} />
        :
        <p>There are no questions matching your query! :(</p>
      }
    </Section>
  )
}