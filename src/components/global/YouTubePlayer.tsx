"use client"
import React, {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/global/Button";
import {CookieConsentState, useCookieConsent} from "@/hooks/useCookieConsent";
import Link from "next/link";

export const YouTubePlayer = ({id}: { id: string }) => {
  const [showVideo, setShowVideo] = useState(false)
  const {allowExternalMedia, giveConsent} = useCookieConsent()

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
    if (allowExternalMedia) return null
    return (
      <div className={"session-notice"}>
        <p>
          To view external videos, you need to accept our <b>optional</b> cookies.<br/>
          <p>Learn more about how we use cookies <Link href={"/privacy"}>here</Link></p>
        </p>
        <Button color={"light"} onClick={() => giveConsent(CookieConsentState.ALL)}>
          Allow Cookies
        </Button>
      </div>
    )
  }

  return (
    <div className="youtube-player">
      {allowExternalMedia ? <VideoJsx/> : <CookieWarningJsx/>}
    </div>
  );
}
