"use client"
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "usehooks-ts";
import {Os} from "@/components/page/download/DownloadSection";
import {mdiApple, mdiLinux, mdiMicrosoftWindows} from "@mdi/js";
import {OperatingSystemCard} from "@/components/page/download/OperatingSystemCard";

export interface OperatingSystemSelectionProps {
  currentOs: Os | null;
  setCurrentOs: Dispatch<SetStateAction<Os | null>>;
  hostOs: Os | null;
}

export const OperatingSystemSelection = ({currentOs, setCurrentOs, hostOs }: OperatingSystemSelectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const operatingSystems = [
    {
      os: Os.MAC,
      icon: mdiApple,
      subtitle: "Supports El Capitan and above",
    },
    {
      os: Os.WINDOWS,
      icon: mdiMicrosoftWindows,
      subtitle: "Supports Windows 7 and above",
    },
    {
      os: Os.LINUX,
      icon: mdiLinux,
      subtitle: "Distributed as an AppImage",
    },
  ]
  const [orderedOperatingSystems, setOrderedOperatingSystems] = useState(operatingSystems)

  const handleClick = (os: Os) => {
    if (currentOs != os) setCurrentOs(os)
    if (isMobile) return
    sectionRef?.current?.scrollIntoView()
  }

  // rearrange the order of the operating systems
  useEffect(() => {
    if (!hostOs) return
    const rearrangedOperatingSystems = operatingSystems.slice()
    const hostOsIndex = rearrangedOperatingSystems.findIndex(os => os.os === hostOs)
    if (hostOsIndex !== -1) {
      const [hostOsItem] = rearrangedOperatingSystems.splice(hostOsIndex, 1)
      rearrangedOperatingSystems.splice(1, 0, hostOsItem)
    }
    setOrderedOperatingSystems(rearrangedOperatingSystems)
  }, [hostOs])

  return (
    <div ref={sectionRef} className={`os-selection ${!hostOs ? "loading" : ""}`}>
      {
        orderedOperatingSystems.map(({os, icon, subtitle}, index) => {
          return (
            <OperatingSystemCard
              os={os}
              icon={icon}
              subtitle={subtitle}
              currentOs={currentOs}
              handleClick={handleClick}
              key={`os-${index}`}
            />
          )
        })
      }
    </div>
  );
};