import HeroSection from "@/components/HeroSection";
import {Text} from "@/components/global/textmedia/Text";
import {SupportButtons} from "@/components/global/SupportButtons";
import Section from "@/components/global/Section";
import {TextCode} from "@/components/global/textmedia/TextCode";
import {Code} from "@/components/global/CodeBlock";
import {Animation, slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";

export default function FAQ() {
	return (
		<>
			<HeroSection>
				<Text
					title={"Client 🤝 Server"}
					text={"To allow servers to further customize their users' experience, we provide a simple wrapper for our API"}
				/>
			</HeroSection>

			<Section>
				<Animation variants={slideInLeftVariants}>
					<Text title={"Integrate our API"} text={""}/>
				</Animation>
				<Animation variants={slideInLeftVariants} transition={{duration: 0.8, delay: 0.3}}>
					<Code codeTabs={[
						{
							name: "build.gradle.kts",
							language: "gradle",
							content:
								`repositories {
	maven("https://maven.norisk.gg/repo")
}

dependencies {
	implementation("gg.norisk:server-api:1.0.0")
}
`,
						},
						{
							name: "build.gradle",
							language: "gradle",
							content:
								`repositories {
	maven {
		url "https://maven.norisk.gg/repo"
	}
}

dependencies {
	implementation "gg.norisk:server-api:1.0.0"
}
`,
						}
					]}
					/>
				</Animation>
			</Section>

			<Section backgroundColor={"variant"}>
				<TextCode
					title={"Custom PvP"}
					text={"We provide a lot of features to customize the PvP experience on your server.<br>" +
						"Whether it's reviving the 1.7 PvP vibe or shaping a fully unique expierience.<br><br>" +
						"You can toggle these features for each player individually, giving you complete control.<br>"}
					leftText
					titleAboveContent
					codeFirst
					codeTabs={[
						{
							name: "Manager.kt",
							language: "kotlin",
							content: `import gg.norisk.api.server.CustomPvP

object JoinListener : Listener {

	@EventHandler
	fun onJoin(event: PlayerJoinEvent) {
		CustomPvP(event.player) {
			allowBlockhit()
			knockback(KnockbackType.OLD_PVP)
		}
	}
}
`,
							linesToHighlight: [7, 8, 9]
						},
						{
							name: "Manager.java",
							language: "java",
							content:
								`import gg.norisk.api.server.CustomPvP;

public class JoinListener implements Listener {

	@EventHandler
	public void onJoin(PlayerJoinEvent event) {
		CustomPvP(event.getPlayer())
			.allowBlockhit()
			.knockback(KnockbackType.OLD_PVP);
	}
}
`,
							linesToHighlight: [7, 8, 9, 10]
						}
					]}
					imageTab={{
						name: "Blockhit.jpg",
						icon: "/image.svg",
						content: "/blockhit.jpg"
					}}
				/>
			</Section>

			<Section>
				<TextCode
					title={"Player-based Tick Speed"}
					text={"Our API allows you to individually adjust players tick speeds.<br>" +
						"This allows servers to fine-tune their gameplay, enabling scenarios such as slow-motions or fast-paced challanges."}
					leftText
					titleAboveContent
					titleAlign={"center"}
					codeTabs={[
						{
							name: "Manager.kt",
							language: "kotlin",
							content: `import gg.norisk.api.server.TickSpeed

object JoinListener : Listener {

	@EventHandler
	fun onJoin(event: PlayerJoinEvent) {
		event.tickSpeed = 10
	}
}
`,
							linesToHighlight: [7, 8, 9]
						},
						{
							name: "Manager.java",
							language: "java",
							content: `import gg.norisk.api.server.TickSpeed;

public class JoinListener implements Listener {

	@EventHandler
	public void onJoin(PlayerJoinEvent event) {
		TickSpeed.set(event.getPlayer(), 10)
	}
}
`,
							linesToHighlight: [7, 8, 9, 10]
						}
					]}
					imageTab={{
						name: "Blockhit.jpg",
						icon: "/image.svg",
						content: "/blockhit.jpg"
					}}
				/>
			</Section>
			<SupportButtons headline={"Need further assistance?"}/>
		</>
	)
}
