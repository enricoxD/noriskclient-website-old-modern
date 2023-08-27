import HeroSection from "@/components/HeroSection";
import Section from "@/components/global/Section";
import {ModuleGrid} from "@/components/ModuleGrid";
import {IconGrid, IconGridEntryProps} from "@/components/global/IconGrid";
import {mdiBug, mdiDownload, mdiHelp, mdiLightbulb} from "@mdi/js";
import {TextMedia} from "@/components/global/textmedia/TextMedia";
import {SupportButtons} from "@/components/global/SupportButtons";
import {Media} from "@/components/global/textmedia/Media";

export default function Page() {

  const gridEntries: IconGridEntryProps[] = [
    {
      icon: mdiHelp,
      title: "Support",
      text: "Join our Discord to get support from the community and chat with other people!",
    },
    {
      icon: mdiLightbulb,
      title: "Features",
      text: "Feel free to share your ideas on our Discord server or on our GitHub repository.",
    },
    {
      icon: mdiBug,
      title: "Bugs",
      text: "You can easily report any bug to our GitHub and we will fix it as soon as possible.",
    },
  ]

  return (
    <main>
      <HeroSection landingpage>
        <TextMedia
          title={"NoRisk Client"}
          titleClassName={"huge-text gradient-text"}
          text={"Community-oriented Minecraft Modpack Client providing unique cosmetics and features."}
          mediaType={"image"}
          imageUrl={"/logo.svg"}
          mediaClassName={"matrix-scale"}
          buttonHref={"/download"}
          buttonIcon={mdiDownload}
          buttonLabel={"Download"}
          reverseTouch
        />
      </HeroSection>

      <Section headline={"What we have to offer"} id={"features"}>
        <ModuleGrid/>
      </Section>

      <Section headline={"Take a look at our latest video!"} id={"features"}>
        <Media mediaType={"video"} videoId={"xrZ3HM2Xv6Q"} />
      </Section>

      <Section headline={"Make It yours!"}
               subline={"Your perspective matters. Let's create an amazing and unique future for our community, together"}
               backgroundColor={"variant"}
               id={"community-first"}
      >
        <IconGrid entries={gridEntries}/>
        <SupportButtons />
      </Section>
    </main>
  )
}
