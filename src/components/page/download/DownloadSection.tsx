import Section from "@/components/global/Section";
import {
  OperatingSystemSelection,
  OperatingSystemSelectionProps
} from "@/components/page/download/OperatingSystemSelection";
import {ButtonSection} from "@/components/global/ButtonSection";
import {Button} from "@/components/global/Button";

export enum Os {
  WINDOWS = "Windows",
  MAC = "MacOS",
  LINUX = "Linux"
}

export const DownloadSection = ({ currentOs, setCurrentOs, hostOs }: OperatingSystemSelectionProps) => {
  return (
    <>
      <Section>
        <OperatingSystemSelection currentOs={currentOs} setCurrentOs={setCurrentOs} hostOs={hostOs}/>
      </Section>
      <ButtonSection backgroundColor={"variant"}>
        <Button>
          Start {currentOs} download!
        </Button>
      </ButtonSection>
    </>
  )
}