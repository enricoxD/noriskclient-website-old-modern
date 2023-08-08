"use client"
import HeroSection from "@/components/HeroSection";
import {Text} from "@/components/global/textmedia/Text";
import {AccordionList} from "@/components/global/AccordionList";
import Section from "@/components/global/Section";
import {SupportButtons} from "@/components/global/SupportButtons";
import {useState} from "react";

const accordions = [
  {
    label: "What is NoRisk Client",
    content: "NoRisk Client is a community-orientated Minecraft Client with unique features and cosmetics."
  },
  {
    label: "Which Minecraft version is supported by the NoRisk Client?",
    content: "NoRisk Client is compatible with the latest Minecraft version, 1.20.1, ensuring you can enjoy all the new features and content while benefiting from our enhancements."
  },
  {
    label: "Where can I upload my custom cape?",
    content: "You can easily upload your custom cape within our launcher. We've made it simple and convenient for you to personalize your Minecraft experience with your own unique style."
  },
  {
    label: "What mods can I use with NoRisk Client?",
    content: "NoRisk Client comes pre-loaded with a selection of mods that offer various enhancements and features, carefully integrated using the Modrinth API. Additionally, you have the option to further expand your mod collection by easily installing compatible Fabric mods directly from Modrinth via our launcher. Please note that certain mods, especially those that provide an unfair advantage, have been prohibited to maintain fair gameplay."
  },
  {
    label: "Can I expect improved FPS with NoRisk Client?",
    content: "Absolutely! NoRisk Client utilizes a variety of techniques to enhance your frame rates, and our specialized Performance Mode takes it a step further, providing even more significant improvements in gameplay smoothness."
  },
  {
    label: "Why does it say I'm banned?",
    content: "If you're encountering a ban message, it might be because you've used forbidden mods or engaged in actions like wearing inappropriate capes that violate our fair gameplay standards. Our goal is to maintain an equitable and enjoyable experience for all players."
  },
  {
    label: "Is NoRisk Client free to use?",
    content: "Yes, NoRisk Client is available for free. If you'd like to show your support, consider exploring our store for optional ways to contribute."
  },
  {
    label: "How can I report bugs or make feature requests?",
    content: "If you come across any bugs or have ideas for new features, you can submit them on our GitHub repository or discuss them with our community on Discord. Your feedback helps us enhance the NoRisk Client for everyone."
  },
  {
    label: "Which operating systems are supported by NoRisk Client?",
    content: "NoRisk Client is compatible with Windows, Linux, and Mac operating systems, ensuring accessibility and enjoyment across a variety of platforms."
  },
  {
    label: "Is there a public API for Minecraft servers?",
    content: "Yes, we provide a public API wrapper that introduces custom functionalities into the game, including features like dual sword PvP and 1.7 PvP mechanics within the 1.20 version. This API wrapper enhances your gameplay experience by offering unique capabilities and options."
  },
]

export default function FAQ() {
  const [message, setMessage] = useState('');
  const [filteredAccordions, setFilteredAccordions] = useState(accordions)

  const handleChange = (event: any) => {
    setMessage(event.target.value);
    if (event.target.value.length == 0) {
      setFilteredAccordions(accordions)
      return
    }

    const filtered = accordions.filter((accordion) => {
      return accordion.label.toLowerCase().includes(message.toLowerCase()) || accordion.content.toLowerCase().includes(message.toLowerCase())
    })
    setFilteredAccordions(filtered)

    console.log('value is:', event.target.value);
  };

  return (
    <>
      <HeroSection>
        <Text title={"Frequently Asked Questions"}
              text={"Curious Minds, Meet Solutions.<br/>Require Further Assistance?<br/>Contact Us via the Listed Platforms."}/>
      </HeroSection>
      <Section>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
          style={{
            color: "red"
          }}
        />
        <AccordionList accordions={filteredAccordions} />
      </Section>
      <SupportButtons headline={"Your questions haven't been answered?"} />
    </>
  )
}
