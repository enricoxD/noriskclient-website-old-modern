import Section from "@/components/global/Section";
import Image from "next/image";
import {DiscordIcon} from "@/icons/DiscordIcon";
import {TwitterIcon} from "@/icons/TwitterIcon";
import {YouTubeIcon} from "@/icons/YouTubeIcon";
import {TwitchIcon} from "@/icons/TwitchIcon";
import {GitHubIcon} from "@/icons/GitHubIcon";
import Link from "next/link";
import socialLinks from "@/config/socialLinks";
import {TikTokIcon} from "@/icons/TikTokIcon";

export const Footer = () => {
  return (
    <Section className={"footer"} backgroundColor={"footer"}>
      <div className={"footer-top"}>
        <Image src={"/logo.svg"} alt={"NoRisk Client"} width={48} height={48}/>
        <ul className={"socials"}>
          <li className={"social github"}><Link href={socialLinks.github} aria-label={"NoRisk Client GitHub"}><GitHubIcon size={24}/></Link></li>
          <li className={"social discord"}><Link href={socialLinks.discord} aria-label={"NoRisk Client Discord"}><DiscordIcon size={24}/></Link></li>
          <li className={"social youtube"}><Link href={socialLinks.youtube} aria-label={"NoRisk YouTube"}><YouTubeIcon size={24}/></Link></li>
          <li className={"social twitch"}><Link href={socialLinks.twitch} aria-label={"NoRisk Twitch"}><TwitchIcon size={24}/></Link></li>
          <li className={"social twitter"}><Link href={socialLinks.twitter} aria-label={"NoRisk Client Twitter"}><TwitterIcon size={24}/></Link></li>
          <li className={"social tiktok"}><Link href={socialLinks.tiktok} aria-label={"NoRisk Client Twitter"}><TikTokIcon size={24}/></Link></li>
        </ul>
      </div>
      <div className={"footer-bottom"}>
        <p>&copy; 2023 NoRisk Client</p>
        <ul className={"links"}>
          <li><Link href={"/store"} aria-label={"NoRisk Client Store"}>Store</Link></li>
          <li><Link href={"/faq"} aria-label={"NoRisk Client FAQ"}>FAQ</Link></li>
          <li><Link href={"/terms"} aria-label={"NoRisk Client Terms of Service"}>Terms</Link></li>
          <li><Link href={"/privacy"} aria-label={"NoRisk Client Privacy Policy"}>Privacy Policy</Link></li>
        </ul>
        <p>Not affiliated with Mojang Studios</p>
      </div>
    </Section>
  )
}