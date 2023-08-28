import {Button} from "@/components/global/Button";

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
      {title && <p className={`title ${titleClassName}`}>{title}</p>}
      <p className={`text-content ${leftText ? "left-text" : ""}`} dangerouslySetInnerHTML={{__html: text}} />
      { buttonHref && buttonLabel &&
          <Button href={buttonHref} icon={buttonIcon}>
            {buttonLabel}
          </Button>
      }
    </div>
  )
}