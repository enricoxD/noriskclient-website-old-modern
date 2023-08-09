import {Os} from "@/components/page/download/DownloadSection";
import Image from "next/image";
import Icon from "@mdi/react";

export const OperatingSystemCard = ({os, icon, subtitle, currentOs, handleClick}: {
  os: Os,
  icon: string,
  subtitle: string,
  currentOs: Os | null,
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
