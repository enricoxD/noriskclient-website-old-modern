import {YouTubePlayer} from "@/components/global/YouTubePlayer";
import Image from "next/image";

export interface MediaProps {
  mediaType: "image" | "video";
  videoId?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const Media = ({mediaType, videoId, imageUrl, imageAlt}: MediaProps) => {
  return (
    <div className={"media"}>
      {
        mediaType == "video" ?
          <YouTubePlayer id={videoId!}/>
          :
          <Image src={imageUrl!} alt={imageAlt || ""}/>
      }
    </div>
  )
}


