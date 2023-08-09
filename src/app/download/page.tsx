import HeroSection from "@/components/HeroSection";
import {Text} from "@/components/global/textmedia/Text";

import Section from "@/components/global/Section";
import {IconGrid, IconGridEntryProps} from "@/components/global/IconGrid";
import {SupportButtons} from "@/components/global/SupportButtons";
import {mdiClock, mdiProgressWrench, mdiRocketLaunch} from "@mdi/js";
import {DownloadSection} from "@/components/page/download/DownloadSection";

const gridEntries: IconGridEntryProps[] = [
  {
    icon: mdiClock,
    title: "Download",
    text: "Click the Download button below and wait for your download to finish.",
  },
  {
    icon: mdiProgressWrench,
    title: "Install the Launcher",
    text: "Run the installer to download all the required assets for the NoRisk Client Launcher",
  },
  {
    icon: mdiRocketLaunch,
    title: "Start Playing",
    text: "Click Launch and start exploring our unique cosmetics and features! :)",
  },
]

export default function Download() {
  return (
    <>
      <HeroSection>
        <Text title={"Download"}
              text={"Tailored for You: Choose Your Platform and Get Started"}/>
      </HeroSection>
      <DownloadSection />
      <Section headline={"Let's get it started!"}
               subline={"You're just one click away from starting our shared adventure!"}
               backgroundColor={"variant"}
      >
        <IconGrid entries={gridEntries}/>
      </Section>
      <Section>
        <SupportButtons headline={"Need help? Contact us here!"}/>
      </Section>
    </>
  )
}
