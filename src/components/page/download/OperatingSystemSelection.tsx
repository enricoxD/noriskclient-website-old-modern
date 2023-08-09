"use client"
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "usehooks-ts";
import {Os} from "@/components/page/download/DownloadSection";
import {mdiApple, mdiLinux, mdiMicrosoftWindows} from "@mdi/js";
import {OperatingSystemCard} from "@/components/page/download/OperatingSystemCard";

interface OperatingSystemSelectionProps {
  currentOs: Os | null;
  setCurrentOs: Dispatch<SetStateAction<Os | null>>;
}

export const OperatingSystemSelection = ({currentOs, setCurrentOs}: OperatingSystemSelectionProps) => {
  const [hostOs, setHostOs] = useState<Os | null>(null)
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