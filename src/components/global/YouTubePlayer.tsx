"use client"
import React, {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/global/Button";

export const YouTubePlayer = ({id}: { id: string }) => {
  /* TODO export allowCookie state to make them global and safe in session */
  const [showVideo, setShowVideo] = useState(false)
  const [allowsCookies, setAllowCookies] = useState(false)

  const playVideo = () => {
    setShowVideo(true);
  };

  const VideoJsx = () => {
    return (
      <>
        {
          showVideo
            ?
            <iframe
              loading={"lazy"}
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              allowFullScreen
              title="Embedded youtube"
            />
            :
            <div className="youtube-thumbnail" onClick={playVideo}>
              <Image src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={"YouTube Video"} fill
                     priority/>
              <div className="play-button-overlay"></div>
            </div>
        }
      </>
    )
  }

  const CookieWarningJsx = () => {
    return (
      <div className={"session-notice"}>
        <p>To view external videos, you need to accept our <b>optional</b> cookies.</p>
        <Button color={"light"} onClick={() => setAllowCookies(true)}>
          Allow Cookies
        </Button>
      </div>
    )
  }

  return (
    <div className="youtube-player">
      {allowsCookies ? <VideoJsx /> : <CookieWarningJsx />}
    </div>
  );
}
