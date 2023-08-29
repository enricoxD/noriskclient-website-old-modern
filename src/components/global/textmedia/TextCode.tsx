"use client"
import {Text, TextProps} from "@/components/global/textmedia/Text";
import {Animation, slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";
import {useMediaQuery} from "usehooks-ts";
import {useEffect, useState} from "react";
import {Code, CodeProps} from "@/components/global/CodeBlock";

interface TextCodeProps extends TextProps, CodeProps {
  titleAboveContent?: boolean;
  titleAlign?: "left" | "center" | "right";
  reverseTouch?: boolean;
  codeFirst?: boolean;
  mediaClassName?: string;
}

export const TextCode = (
  {
    title,
    titleClassName,
    text,
    buttonHref,
    buttonLabel,
    buttonIcon,
    reverseTouch,
    codeFirst,
    codeTabs,
    imageTab,
    titleAboveContent,
    titleAlign,
    leftText
  }: TextCodeProps) => {
  const isTouchQuery = useMediaQuery("(max-width: 1023px)")
  const [isTouch, setTouch] = useState(false)
  const [reverse, setReverse] = useState(codeFirst || false)

  useEffect(() => {
    if (isTouchQuery) {
      setTouch(true)
      setReverse(reverseTouch || false)
    }
  }, [])

  const TextJsx = () => (
    <Text
      title={titleAboveContent ? undefined : title}
      titleClassName={titleAboveContent ? undefined : titleClassName}
      text={text}
      buttonHref={buttonHref}
      buttonLabel={buttonLabel}
      buttonIcon={buttonIcon}
      leftText={leftText}
    />
  )

  const CodeJsx = () => <Code
    codeTabs={codeTabs}
    imageTab={imageTab}
  />

  const TitleJsx = () => {
    const ActualTitle = () => <p
      className={`title ${titleClassName ? titleClassName : ""} ${titleAlign ? titleAlign : ""}`}>{title}</p>

    return (
      <div className={`title-container`}>
        {isTouch || titleAlign == "center" ?
          <Animation variants={slideInLeftVariants}>
            <ActualTitle/>
          </Animation>
          : titleAlign == "right" ?
            <Animation variants={slideInRightVariants}>
              <span/>
              <ActualTitle/>
            </Animation>
            :
            <Animation variants={slideInLeftVariants}>
              <ActualTitle/>
              <span/>
            </Animation>
        }
      </div>
    )
  }

  return (
    <div className={`textmedia`}>
      {titleAboveContent && <TitleJsx/>}
      <div className={"content"}>
        <Animation variants={slideInLeftVariants} transition={titleAboveContent ? {duration: 0.7, delay: 0.2} : undefined}>
          {reverse ? <CodeJsx/> : <TextJsx/>}
        </Animation>
        <Animation variants={slideInRightVariants} transition={titleAboveContent ? {duration: 0.7, delay: 0.5} : {duration: 0.7, delay: 0.3}}>
          {reverse ? <TextJsx/> : <CodeJsx/>}
        </Animation>
      </div>
    </div>
  )
}