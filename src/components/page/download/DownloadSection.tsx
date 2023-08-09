"use client"
import Section from "@/components/global/Section";
import {OperatingSystemSelection} from "@/components/page/download/OperatingSystemSelection";
import {ButtonSection} from "@/components/global/ButtonSection";
import {Button} from "@/components/global/Button";
import {useState} from "react";

export enum Os {
  WINDOWS = "Windows",
  MAC = "MacOS",
  LINUX = "Linux"
}

export const DownloadSection = () => {
  const [currentOs, setCurrentOs] = useState<Os | null>(null)

  return (
    <>
      <Section>
        <OperatingSystemSelection currentOs={currentOs} setCurrentOs={setCurrentOs}/>
      </Section>
      <ButtonSection backgroundColor={"variant"}>
        <Button>
          Start {currentOs} download!
        </Button>
      </ButtonSection>
    </>
  )
}