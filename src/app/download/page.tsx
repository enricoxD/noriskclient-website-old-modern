"use client"

import HeroSection from "@/components/HeroSection";
import {Text} from "@/components/global/textmedia/Text";

import Section from "@/components/global/Section";
import {IconGrid, IconGridEntryProps} from "@/components/global/IconGrid";
import {SupportButtons} from "@/components/global/SupportButtons";
import {mdiClock, mdiProgressWrench, mdiRocketLaunch} from "@mdi/js";
import {DownloadSection, Os} from "@/components/page/download/DownloadSection";
import {useEffect, useState} from "react";
import {Media} from "@/components/global/textmedia/Media";
import {slideInLeftVariants} from "@/components/global/animation/Animation";

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
  const [hostOs, setHostOs] = useState<Os | null>(null)
  const [currentOs, setCurrentOs] = useState<Os | null>(null)
  const videos = {
    Windows: "4dcUdz2Efdc",
    Linux: "ShcR4Zfc6Dw",
    MacOS: "j_I9nkpovCQ"
  }
  // detect the users operating system
  useEffect(() => {
    detectOS()
      .then((os) => {
        console.log("Detected ", os)
        setHostOs(os);
        setCurrentOs(os);
      })
  }, []);

  async function detectOS() {
    if (typeof window == "object") {
      const platform = navigator.platform;
      if (platform.indexOf('Win') !== -1) return Os.WINDOWS;
      if (platform.indexOf('Mac') !== -1) return Os.MAC;
      if (platform.indexOf('Linux') !== -1) return Os.LINUX;
      return Os.LINUX
    }
    return Os.MAC;
  }

  return (
    <>
      <HeroSection>
        <Text title={"Download"}
              text={"Tailored for You: Choose Your Platform and Get Started"}/>
      </HeroSection>
      <DownloadSection currentOs={currentOs} setCurrentOs={setCurrentOs} hostOs={hostOs}/>
      <Section headline={"Let's get it started!"}
               subline={"You're just one click away from starting our shared adventure!"}
               backgroundColor={"variant"}
      >
        <IconGrid entries={gridEntries}/>
      </Section>

      {/*TODO videos ersetzen*/}
      <Section headline={"Download Instructions"} subline={"haha die vidoes müsste man noch ersetzen"} backgroundColor={"variant"}>
        { currentOs && <Media animation={slideInLeftVariants} mediaType={"video"} videoId={videos[currentOs]}/>}
      </Section>
      <Section>
        <SupportButtons headline={"Need help? Contact us here!"}/>
      </Section>
    </>
  )
}
