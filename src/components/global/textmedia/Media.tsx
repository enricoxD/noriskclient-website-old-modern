import {YouTubePlayer} from "@/components/global/YouTubePlayer";
import Image from "next/image";

export interface MediaProps {
  mediaType: "image" | "video";
  videoId?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export const Media = ({mediaType, videoId, imageUrl, imageAlt, className}: MediaProps) => {
  return (
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
  )
}


