import {Button} from "@/components/global/Button";
import {Animation, slideInLeftVariants} from "@/components/global/animation/Animation";

export interface TextProps {
	title?: string;
	titleClassName?: string;
	text: string;
	buttonHref?: string;
	buttonLabel?: string;
	buttonIcon?: string;
	leftText?: boolean;
}

export const Text = ({title, titleClassName, text, leftText, buttonHref, buttonLabel, buttonIcon}: TextProps) => {
	return (
		<div className={"text"}>
			{title &&
				<Animation variants={slideInLeftVariants} transition={{duration: 0.7, delay: 0.3}}>
					<p className={`title ${titleClassName}`}>{title}</p>
				</Animation>
			}
			<Animation variants={slideInLeftVariants} transition={{duration: 0.7, delay: title ? 0.6 : 0.0}}>
				<p className={`text-content ${leftText ? "left-text" : ""}`} dangerouslySetInnerHTML={{__html: text}}/>
			</Animation>
			{buttonHref && buttonLabel &&
				<Animation variants={slideInLeftVariants} transition={{duration: 0.7, delay: title ? 0.9 : 0.3}}>
					<Button href={buttonHref} icon={buttonIcon}>
						{buttonLabel}
					</Button>
				</Animation>
			}
		</div>
	)
}