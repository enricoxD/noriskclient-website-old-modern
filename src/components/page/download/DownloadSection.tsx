"use client"
import Section from "@/components/global/Section";
import {OperatingSystemSelection} from "@/components/page/download/OperatingSystemSelection";
import {ButtonSection} from "@/components/global/ButtonSection";
import {Button} from "@/components/global/Button";
import {useEffect, useState} from "react";

export enum Os {
  WINDOWS = "Windows",
  MAC = "MacOS",
  LINUX = "Linux"
}

export const DownloadSection = () => {
  const [hostOs, setHostOs] = useState<Os | null>(null)
  const [currentOs, setCurrentOs] = useState<Os | null>(null)

  useEffect(() => {
    const detectedOs = detectOS()
      .then((os) => {
        setHostOs(os);
        setCurrentOs(os);
      })
  }, []);

  async function detectOS() {
    if (typeof window !== "undefined") {
      const platform = navigator.platform;
      if (platform.indexOf('Win') !== -1) return Os.WINDOWS;
      if (platform.indexOf('Mac') !== -1) return Os.MAC;
      if (platform.indexOf('Linux') !== -1) return Os.LINUX;
    }
    return Os.WINDOWS;
  }

  return (
    <>
      {hostOs && currentOs &&
          <>
              <Section>
                  <OperatingSystemSelection hostOs={hostOs} currentOs={currentOs} setCurrentOs={setCurrentOs}/>
              </Section>
              <ButtonSection backgroundColor={"variant"}>
                  <Button>
                      Start {currentOs} download!
                  </Button>
              </ButtonSection>
          </>
      }
    </>
  )
}