"use client"
import {slideInLeft, slideInRight} from "@/components/global/animation/Animation";
import Section from "@/components/global/Section";
import {GitHubIcon} from "@/icons/GitHubIcon";
import {motion} from "framer-motion";
import {ReactNode} from "react";
import {DiscordIcon} from "@/icons/DiscordIcon";

export const SupportButtons = ({headline}: { headline?: string }) => {
  const SupportButton = ({children, variants, service, href}: {
    children: ReactNode,
    variants: any,
    href: string,
    service: "discord" | "github"
  }) => {
    const shownName = service == "discord" ? "Discord" : "GitHub"

    return (
      <motion.a
        className={`support-button-wrapper`}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1
        }}
        transition={{duration: 0.35}}
        variants={variants}
        href={href}
      >
        <div className={`support-button ${service}`}>
          {children}
          <p className={"service-name"}>{shownName}</p>
        </div>
      </motion.a>
    )
  }

  return (
    <Section headline={headline}>
      <div className={"support-buttons"}>
        <SupportButton variants={slideInLeft} service={"github"} href={"https://github.com/noriskclient"}>
          <GitHubIcon size={48}/>
        </SupportButton>

        <SupportButton variants={slideInRight} service={"discord"} href={"https://discord.gg/noriskclient"}>
          <DiscordIcon size={48}/>
        </SupportButton>
      </div>
    </Section>
  )
}