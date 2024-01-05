"use client"
import {mdiCamera, mdiCodeArray, mdiCodeBraces, mdiControllerClassic, mdiDominoMask, mdiSpeedometer} from "@mdi/js";
import {useState} from "react";
import Icon from "@mdi/react";
import Image from "next/image";
import {motion} from "framer-motion";
import {useMediaQuery} from "usehooks-ts";

interface ModuleGridColumnType {
  label: string;
  icon?: string;
  image?: string;
  index: number;
}

const ModuleGridColumn = ({label, icon, image, index}: ModuleGridColumnType) => {
  const [isEnabled, setEnabled] = useState(false)
    const isMobile = useMediaQuery("(max-width: 768px)")

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <div className={"column"}>
      <motion.div
        className={`module ${isEnabled ? "enabled" : ""}`}
        whileInView={"visible"}
        initial={"hidden"}
        variants={variants}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: isMobile ? 0.5 * (index % 2 + 1) : 0.3 * (index + 1),
          scale: {
            duration: 0.3
          }
        }}
        viewport={{
          once: true,
          amount: 0.25
        }}
      >
        <div className="label" onClick={() => setEnabled(!isEnabled)}>
          <p>{label}</p>
        </div>
        <div className={"icon-holder"}>
          {icon && <Icon path={icon} className={"icon"}/>}
          {image &&
              <>
                  <Icon path={mdiCodeBraces} className={"icon"} color={"#00000000"}/>
                  <Image src={image} className={"image"} alt={label} fill/>
              </>
          }
        </div>
      </motion.div>
    </div>
  )
}

export const ModuleGrid = () => {
  enum Tab {
    FEATURES,
    COSMETICS
  }

  const [currentTab, selectTab] = useState<Tab>(Tab.FEATURES)

  const features = [
    {
      label: "Free Cosmetics",
      icon: mdiDominoMask
    },
    {
      label: "FPS Boost",
      icon: mdiSpeedometer
    },
    {
      label: "Own Mods",
      image: "/modrinth.svg"
    },
    {
      label: "McReal",
      icon: mdiCamera
    },
    {
      label: "Minigames",
      icon: mdiControllerClassic
    },
    {
      label: "API Wrapper",
      icon: mdiCodeBraces
    }
  ]
  const cosmetics = [
    {
      label: "Capes",
      icon: mdiDominoMask
    },
    {
      label: "Shoulder Pets",
      icon: mdiSpeedometer
    },
    {
      label: "Dragon Wings",
      icon: mdiCodeArray
    },
    {
      label: "Midas Glint",
      image: "/modrinth.svg"
    },
    {
      label: "Creeper Overlay",
      icon: mdiControllerClassic
    },
    {
      label: "Allay Wings",
      icon: mdiCodeBraces
    }
  ]

  return (
    <div className={"module-grid"}>
      <div className={"grid-head"}>
        <Image className={"logo"} src={"/logo.svg"} alt={"NoRisk Client Logo"} height={64} width={64}/>
        <p
          className={`${currentTab == Tab.FEATURES ? "is-active" : ""}`}
          onClick={() => selectTab(Tab.FEATURES)}
        >
          Features
        </p>
        <p
          className={`${currentTab == Tab.COSMETICS ? "is-active" : ""}`}
          onClick={() => selectTab(Tab.COSMETICS)}
        >
          Cosmetics
        </p>
      </div>
      <motion.div className={"grid-content"} layout>
        {
          currentTab == Tab.FEATURES &&
            <>
              {features.map((feature, index) => {
                return <ModuleGridColumn label={feature.label} icon={feature.icon} image={feature.image} index={index}
                                         key={`feature-${index}`}/>
              })}
            </>
        }

        {
          currentTab == Tab.COSMETICS &&
            <>
              {cosmetics.map((cosmetic, index) => {
                return <ModuleGridColumn label={cosmetic.label} icon={cosmetic.icon} image={cosmetic.image}
                                         index={index}
                                         key={`cosmetic-${index}`}/>
              })}
            </>
        }
      </motion.div>
    </div>
  )
}