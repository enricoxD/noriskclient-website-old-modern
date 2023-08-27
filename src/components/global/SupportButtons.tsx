"use client"
import {slideInLeftVariants} from "@/components/global/animation/Animation";
import Section from "@/components/global/Section";
import {GitHubIcon} from "@/icons/GitHubIcon";
import {motion} from "framer-motion";
import {ReactNode} from "react";
import {DiscordIcon} from "@/icons/DiscordIcon";
import socialLinks from "@/config/socialLinks";

export const SupportButtons = ({headline}: { headline?: string }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const SupportButton = ({index, children, service, href}: {
    index: number,
    children: ReactNode,
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
        transition={{
          duration: 0.7,
          delay: index * 0.5
      }}
        variants={slideInLeftVariants}
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
        <SupportButton index={0} service={"github"} href={socialLinks.github}>
          <GitHubIcon size={48}/>
        </SupportButton>

        <SupportButton index={1} service={"discord"} href={socialLinks.discord}>
          <DiscordIcon size={48}/>
        </SupportButton>
      </div>
    </Section>
  )
}