import Section from "@/components/global/Section";
import Image from "next/image";
import {DiscordIcon} from "@/icons/DiscordIcon";
import {TwitterIcon} from "@/icons/TwitterIcon";
import {YouTubeIcon} from "@/icons/YouTubeIcon";
import {TwitchIcon} from "@/icons/TwitchIcon";
import {GitHubIcon} from "@/icons/GitHubIcon";

export const Footer = () => {
  return (
    <Section className={"footer"} backgroundColor={"footer"}>
      <div className={"footer-top"}>
        <Image src={"/logo.svg"} alt={"NoRisk Client"} width={48} height={48}/>
        <ul className={"socials"}>
          <li className={"social github"}><a href={"https://github.com/noriskclient"}><GitHubIcon size={24}/></a></li>
          <li className={"social discord"}><a href={"https://discord.gg/noriskclient"}><DiscordIcon size={24}/></a></li>
          <li className={"social youtube"}><a href={"https://youtube.com/@noriskk"}><YouTubeIcon size={24}/></a></li>
          <li className={"social twitch"}><a href={"https://twitch.tv/norisk"}><TwitchIcon size={24}/></a></li>
          <li className={"social twitter"}><a href={"https://discord.gg/noriskclient"}><TwitterIcon size={24}/></a></li>
        </ul>
      </div>
      <div className={"footer-bottom"}>
        <p>&copy; 2023 NoRisk Client</p>
        <ul className={"links"}>
          <li><a href={"/store"}>Store</a></li>
          <li><a href={"/faq"}>FAQ</a></li>
          <li><a href={"/tos"}>Terms</a></li>
          <li><a href={"/privacy"}>Privacy Policy</a></li>
        </ul>
        <p>Not affiliated with Mojang Studios</p>
      </div>
    </Section>
  )
}