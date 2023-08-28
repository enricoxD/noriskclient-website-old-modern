import HeroSection from "@/components/HeroSection";
import {Text} from "@/components/global/textmedia/Text";
import {SupportButtons} from "@/components/global/SupportButtons";
import Section from "@/components/global/Section";
import {TextMedia} from "@/components/global/textmedia/TextMedia";
import {Code} from "@/components/global/Code";

export default function FAQ() {
  return (
    <>
      <HeroSection>
        <Text
          title={"Client 🤝 Server"}
          text={"To allow servers to further customize their users' experience, we provide a simple wrapper for our API"}/>
      </HeroSection>

      <Section>
        <TextMedia
          title={"Custom PvP"}
          text={"Want to have 1.7 style PvP in newer Versions?<br>We got you! You can now enable Sword-Blocking and easily change players' knockback. Embrace nostalgia or create a unique experience"}
          mediaType={"image"}
          imageUrl={"/blockhit.jpg"}
          imageAlt={"Blockhitting Showcase"}

        />
        <Code codeTabs={[
          {
            name: "Manager.kt",
            language: "kotlin",
            inner: "import gg.norisk.api.server.BlockhitManager\n\n" +
              "class Manager: JavaPlugin() {\n" +
              "\toverride fun onEnable() {\n" +
              "\t\tBlockhitManager.enable()\n" +
              "\t}\n" +
              "}",
            linesToHighlight: [1, 5]
          },
          {
            name: "Manager.java",
            language: "java",
            inner: "import gg.norisk.api.server.BlockhitManager\n\n" +
              "public class Manager extends JavaPlugin {\n" +
              "\t@Override\n" +
              "\tpublic void onEnable() {\n" +
              "\t\tBlockhitManager.enable()\n" +
              "\t}\n" +
              "}",
            linesToHighlight: [1, 6]
          },
          {
            name: "Blockhit.jpg",
            language: "java",
            inner: "<Image src={'/blockhit.jpg'} fill />",
            linesToHighlight: [1, 6]
          }
        ]}/>
      </Section>
      <SupportButtons headline={"Need help creating a unique Minecraft experience?"} />
    </>
  )
}
