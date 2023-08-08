import {ComponentProps} from "react";
import {Animation} from "@/components/global/animation/Animation";

interface SectionProps extends ComponentProps<"section"> {
  headline?: string;
  subline?: string;
  disableContainer?: boolean;
  backgroundColor?: 'default' | 'variant' | 'beige' | 'footer';
  divider?: boolean;
  innerClassName?: string;
  children: React.ReactNode;
}

export default function Section({headline, subline, disableContainer, backgroundColor, divider, children, className, innerClassName, id}: SectionProps) {
  return (
    <div className={`${backgroundColor ? `background-${backgroundColor}` : ""}`}>
      <section id={id} className={`section ${disableContainer ? "" : "container"} ${divider ? "divider" : ""} ${className ? className : ""}`}>
        <Animation animation={"slideInBottom"}>
          {headline && <h2 className={"section-headline"}>{headline}</h2>}
          {subline && <p className={"section-subline"}>{subline}</p>}
        </Animation>
        <div className={innerClassName}>
          {children}
        </div>
      </section>
    </div>
  )
}