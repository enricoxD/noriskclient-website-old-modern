"use client"
import {Text, TextProps} from "@/components/global/textmedia/Text";
import {Animation, slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";
import {useMediaQuery} from "usehooks-ts";
import {useEffect, useState} from "react";
import {Code, CodeProps} from "@/components/global/CodeBlock";

interface TextCodeProps extends TextProps, CodeProps {
  reverseTouch?: boolean;
  imageFirst?: boolean;
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
    imageFirst,
    codeTabs,
    otherTab,
  }: TextCodeProps) => {
  const isTouch = useMediaQuery("(max-width: 1023px)")
  const [reverse, setReverse] = useState(imageFirst || false)

  useEffect(() => {
    if (isTouch) {
      setReverse(reverseTouch || false)
    }
  }, [])

  const TextJsx = () => (
    <Text
      title={title}
      titleClassName={titleClassName}
      text={text}
      buttonHref={buttonHref}
      buttonLabel={buttonLabel}
      buttonIcon={buttonIcon}
    />
  )

  const CodeJsx = () => <Code
    codeTabs={codeTabs}
    otherTab={otherTab}
  />

  return (
    <div className={`textmedia`}>
      <Animation variants={slideInLeftVariants}>
        {reverse ? <CodeJsx/> : <TextJsx/>}
      </Animation>
      <Animation variants={slideInRightVariants} transition={{duration: 0.7, delay: 0.3}}>
        {reverse ? <TextJsx/> : <CodeJsx/>}
      </Animation>
    </div>
  )
}