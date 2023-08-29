"use client"
import {Text, TextProps} from "@/components/global/textmedia/Text";
import {Animation, slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";
import {Media, MediaProps} from "@/components/global/textmedia/Media";
import {useMediaQuery} from "usehooks-ts";
import {useEffect, useState} from "react";

interface TextMediaProps extends TextProps, MediaProps {
  titleAboveContent?: boolean;
  titleAlign?: "left" | "center" | "right";
  reverseTouch?: boolean;
  imageFirst?: boolean;
  mediaClassName?: string;
}

export const TextMedia = (
  {
    title,
    titleClassName,
    text,
    buttonHref,
    buttonLabel,
    buttonIcon,
    mediaType,
    videoId,
    imageUrl,
    imageAlt,
    mediaClassName,
    reverseTouch,
    imageFirst,
    titleAboveContent,
    titleAlign,
  }: TextMediaProps) => {
  const isTouchQuery = useMediaQuery("(max-width: 1023px)")
  const [isTouch, setTouch] = useState(false)
  const [reverse, setReverse] = useState(imageFirst || false)

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
    />
  )

  const MediaJsx = () => <Media mediaType={mediaType} videoId={videoId} imageAlt={imageAlt} imageUrl={imageUrl}
                                className={mediaClassName}/>

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
    <div className={"textmedia"}>
      {titleAboveContent && <TitleJsx/>}
      <div className={"content"}>
        <Animation variants={slideInLeftVariants} transition={titleAboveContent ? {duration: 0.7, delay: 0.2} : undefined}>
          {reverse ? <MediaJsx/> : <TextJsx/>}
        </Animation>
        <Animation variants={slideInRightVariants} transition={titleAboveContent ? {duration: 0.7, delay: 0.5} : {duration: 0.7, delay: 0.3}}>
          {reverse ? <TextJsx/> : <MediaJsx/>}
        </Animation>
      </div>
    </div>
  )
}