"use client"
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import {mdiCart, mdiChevronDown, mdiDownload} from "@mdi/js";
import {Button} from "@/components/global/Button";
import {easeInOut, motion, useScroll, useTransform} from "framer-motion"
import socialLinks from "@/config/socialLinks";

export const NavBar = () => {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false)
  const {scrollY} = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 360],
    ["#25232A00", "#25232ABB"],
    {
      ease: easeInOut
    }
  )

  const backdropBlur = useTransform(
    scrollY,
    [0, 360],
    ["blur(0px)", "blur(15px)"],
    {
      ease: easeInOut
    }
  )

  const toggleBurgerMenu = () => setBurgerMenuActive(!isBurgerMenuActive)

  return (
    <motion.nav
      className={`navbar ${isBurgerMenuActive ? "is-active" : ""}`}
      role={"navigation"}
      aria-label={"main navigation"}
      style={{
        background: backgroundColor,
        backdropFilter: backdropBlur
      }}
    >
      <div className={"container"}>
        <div className={"navbar-brand"}>
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt={"NoRisk Client"} width={64} height={64}/>
          </Link>
          <div className={`navbar-burger ${isBurgerMenuActive ? "is-active" : ""}`} onClick={toggleBurgerMenu}>
            <span/>
            <span/>
            <span/>
          </div>
        </div>

        <div className={"navbar-start"}>
          <div className={"navbar-dropdown"}>
            <Link className={"navbar-link"} href={"/"}>
              Client
              <Icon path={mdiChevronDown} className={"chevron-icon"} size={1} color={"#938F99"}/>
            </Link>
            <div className={"dropdown-box"}>
              <Link className={"navbar-link"} href={"/#features"}>
                Unique Features
              </Link>
              <Link className={"navbar-link"} href={"/#community-first"}>
                Community First
              </Link>
            </div>
          </div>

          <Link className={"navbar-link"} href={"/faq"}>FAQ</Link>
          <Link className={"navbar-link"} href={"/api"}>API</Link>
          <Link className={"navbar-link"} href={socialLinks.discord}>Discord</Link>
        </div>

        <div className={"navbar-end"}>
          <Button icon={mdiDownload} href={"/download"}>
            Download
          </Button>
          <Button color={"beige"} icon={mdiCart} href={"/store"}>
            Store
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
