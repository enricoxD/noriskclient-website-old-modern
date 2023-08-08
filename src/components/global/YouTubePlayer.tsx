"use client"
import React, {useState} from "react";
import Image from "next/image";

export const YouTubePlayer = ({id}: { id: string }) => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="youtube-player">
      {
        showVideo ?
          <iframe
            loading={"lazy"}
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            allowFullScreen
            title="Embedded youtube"
          />
          :
          <div className="youtube-thumbnail" onClick={playVideo}>
            <Image src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={"YouTube Video"} fill priority />
            <div className="play-button-overlay"></div>
          </div>
      }
    </div>
  );
}
