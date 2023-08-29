"use client"
import {Text, TextProps} from "@/components/global/textmedia/Text";
import {Animation, slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";
import {Media, MediaProps} from "@/components/global/textmedia/Media";
import {useMediaQuery} from "usehooks-ts";
import {useEffect, useState} from "react";

interface TextMediaProps extends TextProps, MediaProps {
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
    imageFirst
  }: TextMediaProps) => {
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

  const MediaJsx = () => <Media mediaType={mediaType} videoId={videoId} imageAlt={imageAlt} imageUrl={imageUrl}
                                className={mediaClassName}/>

  return (
    <div className={`textmedia`}>
      <Animation variants={slideInLeftVariants}>
        {reverse ? <MediaJsx/> : <TextJsx/>}
      </Animation>
      <Animation variants={slideInRightVariants} transition={{duration: 0.7, delay: 0.3}}>
        {reverse ? <TextJsx/> : <MediaJsx/>}
      </Animation>
    </div>
  )
}