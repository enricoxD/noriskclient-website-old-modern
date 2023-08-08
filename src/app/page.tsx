import HeroSection from "@/components/HeroSection";
import Section from "@/components/global/Section";
import {ModuleGrid} from "@/components/ModuleGrid";
import {IconGrid, IconGridEntryProps} from "@/components/global/IconGrid";
import {mdiBug, mdiDownload, mdiHelp, mdiLightbulb} from "@mdi/js";
import {TextMedia} from "@/components/global/textmedia/TextMedia";
import {SupportButtons} from "@/components/global/SupportButtons";
import {Text} from "@/components/global/textmedia/Text";

export default function Page() {

  const gridEntries: IconGridEntryProps[] = [
    {
      icon: mdiHelp,
      title: "Support",
      text: "Join our discord to get support from the community and chat with other people!",
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
          mediaType={"video"}
          videoId={"xrZ3HM2Xv6Q"}
          buttonHref={"/download"}
          buttonIcon={mdiDownload}
          buttonLabel={"Download"}
        />
      </HeroSection>

      <Section headline={"What we have to offer"} id={"features"}>
        <ModuleGrid/>
      </Section>

      <Section headline={"Make It yours!"}
               subline={"Your perspective matters. Let's create an amazing and unique future for our community, together"}
               backgroundColor={"variant"}
               id={"community-first"}
      >
        <IconGrid entries={gridEntries}/>
        <SupportButtons headline={"Contact us here!"}/>
      </Section>
    </main>
  )
}
