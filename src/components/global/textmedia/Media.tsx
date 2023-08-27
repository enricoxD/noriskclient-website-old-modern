import {YouTubePlayer} from "@/components/global/YouTubePlayer";
import Image from "next/image";
import {Animation} from "@/components/global/animation/Animation";

export interface MediaProps {
  animation?: any;
  mediaType: "image" | "video";
  videoId?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export const Media = ({animation, mediaType, videoId, imageUrl, imageAlt, className}: MediaProps) => {
  const MediaJsx = () =>
    <div className={`media ${mediaType} ${className ? className : ""}`}>
      {
        mediaType == "video" ?
          <YouTubePlayer id={videoId!}/>
          :
          <div className={"image-wrapper"}>
            <Image src={imageUrl!} alt={imageAlt || ""} fill/>
          </div>
      }
    </div>


  return (
    <>
      {
        animation ?
          <Animation variants={animation}>
            <MediaJsx/>
          </Animation>
          :
          <MediaJsx/>
      }
    </>
  )
}


