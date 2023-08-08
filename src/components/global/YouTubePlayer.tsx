"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Button} from "@/components/global/Button";
import {useCookies} from "react-cookie";
import {CookieConsentState} from "@/components/CookieConsent";

export const YouTubePlayer = ({id}: { id: string }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [cookieConsent, setCookieConsent] = useCookies(["cookieConsent"])
  const [allowExternalMedia, setAllowExternalMedia] = useState(false)

  const giveCookieConsent = () => {
    setCookieConsent("cookieConsent", CookieConsentState.ALL, {path: "/"})
  }

  useEffect(() => {
    const allowsExternalMedia = cookieConsent.cookieConsent == CookieConsentState.ALL;
    setAllowExternalMedia(allowsExternalMedia);
  }, [])

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
        <Button color={"light"} onClick={giveCookieConsent}>
          Allow Cookies
        </Button>
      </div>
    )
  }

  return (
    <div className="youtube-player">
      {allowExternalMedia ? <VideoJsx /> : <CookieWarningJsx />}
    </div>
  );
}
