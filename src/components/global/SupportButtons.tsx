"use client"
import {slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";
import Section from "@/components/global/Section";
import {GitHubIcon} from "@/icons/GitHubIcon";
import {motion} from "framer-motion";
import {ReactNode} from "react";
import {DiscordIcon} from "@/icons/DiscordIcon";
import socialLinks from "@/config/socialLinks";

export const SupportButtons = ({headline}: { headline?: string }) => {
  const SupportButton = ({children, variants, service, href}: {
    children: ReactNode,
    variants: any,
    href: string,
    service: "discord" | "github"
  }) => {
    const shownName = service == "discord" ? "Discord" : "GitHub"

    return (
      <motion.div
        className={`support-button-wrapper`}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1
        }}
        transition={{duration: 0.35}}
        variants={variants}
      >
        <a className={`support-button ${service}`} href={href}>
          {children}
          <p className={"service-name"}>{shownName}</p>
        </a>
      </motion.div>
    )
  }

  return (
    <Section headline={headline}>
      <div className={"support-buttons"}>
        <SupportButton variants={slideInLeftVariants} service={"github"} href={socialLinks.github}>
          <GitHubIcon size={48}/>
        </SupportButton>

        <SupportButton variants={slideInRightVariants} service={"discord"} href={socialLinks.discord}>
          <DiscordIcon size={48}/>
        </SupportButton>
      </div>
    </Section>
  )
}