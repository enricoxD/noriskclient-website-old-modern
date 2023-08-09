import {Text, TextProps} from "@/components/global/textmedia/Text";
import {Animation, slideInLeftVariants, slideInRightVariants} from "@/components/global/animation/Animation";
import {Media, MediaProps} from "@/components/global/textmedia/Media";

interface TextMediaProps extends TextProps, MediaProps {
  image_first?: boolean;
}

export const TextMedia = ({
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
                            image_first
                          }: TextMediaProps) => {
  const reverse = image_first || false

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

  const MediaJsx = () => <Media mediaType={mediaType} videoId={videoId} imageAlt={imageAlt} imageUrl={imageUrl} />

  return (
    <div className={`textmedia`}>
      <Animation variants={slideInLeftVariants}>
        {
          reverse ?
            <MediaJsx />
            :
            <TextJsx />
        }
      </Animation>
      <Animation variants={slideInRightVariants}>
        {
          reverse ?
            <TextJsx />
            :
            <MediaJsx />
        }
      </Animation>
    </div>
  )
}