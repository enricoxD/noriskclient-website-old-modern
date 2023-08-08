import {Button} from "@/components/global/Button";
import {SupportButtons} from "@/components/global/SupportButtons";

export interface TextProps {
  title?: string;
  titleClassName?: string;
  text: string;
  buttonHref?: string;
  buttonLabel?: string;
  buttonIcon?: string;
}

export const Text = ({title, titleClassName, text, buttonHref, buttonLabel, buttonIcon}: TextProps) => {
  return (
    <div className={"text"}>
      {title && <p className={`title ${titleClassName}`}>{title}</p>}
      <p className={"text-content"} dangerouslySetInnerHTML={{__html: text}} />
      { buttonHref && buttonLabel &&
          <Button href={buttonHref} icon={buttonIcon}>
            {buttonLabel}
          </Button>
      }
    </div>
  )
}