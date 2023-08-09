"use client"
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import Icon from "@mdi/react";
import Image from "next/image";
import {useMediaQuery} from "usehooks-ts";
import {Os} from "@/components/page/download/DownloadSection";
import {mdiApple, mdiLinux, mdiMicrosoftWindows} from "@mdi/js";
import {motion} from "framer-motion"

const OperatingSystem = ({os, icon, subtitle, index, currentOs, handleClick}: {
  os: Os,
  hostOs: Os,
  icon: string,
  subtitle: string,
  index: number,
  currentOs: Os,
  handleClick: (os: Os) => void
}) => {
  return (
    <div className={`os-wrapper ${os == currentOs ? "active" : ""}`} onClick={() => handleClick(os)}>
      <div className={`os ${os == currentOs ? "active" : ""}`}>
        <div className={"image-wrapper"}>
          <Image src={`/test-${os.toLowerCase()}.webp`} alt={"test"} fill/>
        </div>
        <div className={"content-wrapper"}>
          <Icon className={"icon"} path={icon} size={6}/>
          <p className={"os-name"}>{os}</p>
          <p className={"subtitle"}>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

interface OperatingSystemSelectionProps {
  hostOs: Os;
  currentOs: Os;
  setCurrentOs: Dispatch<SetStateAction<Os | null>>;
}

export const OperatingSystemSelection = ({hostOs, currentOs, setCurrentOs}: OperatingSystemSelectionProps) => {
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

  useEffect(() => {
    const rearrangedOperatingSystems = operatingSystems.slice()
    const hostOsIndex = rearrangedOperatingSystems.findIndex(os => os.os === hostOs)
    if (hostOsIndex !== -1) {
      const [hostOsItem] = rearrangedOperatingSystems.splice(hostOsIndex, 1)
      rearrangedOperatingSystems.splice(1, 0, hostOsItem)
    }
    setOrderedOperatingSystems(rearrangedOperatingSystems)
  })

  return (
    <div ref={sectionRef} className="os-selection">
      {
        orderedOperatingSystems.map(({os, icon, subtitle}, index) => {
          return (
            <OperatingSystem
              os={os}
              hostOs={hostOs}
              icon={icon}
              subtitle={subtitle}
              currentOs={currentOs}
              handleClick={handleClick}
              index={index}
              key={`os-${index}`}
            />
          )
        })
      }
    </div>
  );
};