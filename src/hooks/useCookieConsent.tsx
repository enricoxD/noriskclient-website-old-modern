import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

export enum CookieConsentState {
  ESSENTIAL = "essential",
  ALL = "all"
}

export const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useCookies(["cookieConsent"]);
  const [consentState, setConsentState] = useState<CookieConsentState | boolean>(true);
  const allowExternalMedia = consentState == CookieConsentState.ALL

  useEffect(() => {
    setConsentState(cookieConsent.cookieConsent || false);
  }, [cookieConsent]);

  const giveConsent = (state: CookieConsentState) => {
    setCookieConsent("cookieConsent", state, {path: "/"});
    setConsentState(state);
  };

  return {
    consent: consentState,
    giveConsent: giveConsent,
    allowExternalMedia: allowExternalMedia
  };
}