"use client"
import {useCookies} from "react-cookie";
import {Button} from "@/components/global/Button";
import {useEffect, useState} from "react";

export enum CookieConsentState {
  ESSENTIAL = "essential",
  ALL = "all"
}

export const CookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useCookies(["cookieConsent"])
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const render = !cookieConsent.cookieConsent
    setShouldRender(render)
  }, [cookieConsent])

  const giveConsent = (state: CookieConsentState) => {
    setCookieConsent("cookieConsent", state, {path: "/"})
  }

  return (
    <>
      {
        shouldRender &&
          <section className={"cookie-consent"}>
              <p><b>We use cookies to enhance your browsing experience.</b></p>
              <p>We utilize personal data to enhance your browsing experience on our website. While some data is essential, others assist us in optimizing the content.</p>
              <p>If you are under 16 years old and wish to provide consent for voluntary services, you must seek permission from your legal guardians.</p>
              <p>
                  By clicking &quot;Accept All&quot;, you agree to our use of cookies, including the use of external
                  media.<br/>
                  Alternatively, you can choose to only accept essential cookies by clicking &quot;Accept Essential&quot;.
              </p>
              <p>You can change your cookie settings at any time. Read more about our cookie policy <a href={"/cookies"}>here</a></p>
              <div className={"buttons"}>
                  <Button color={"light"} onClick={() => giveConsent(CookieConsentState.ESSENTIAL)}>
                      Accept Essential
                  </Button>
                  <Button onClick={() => giveConsent(CookieConsentState.ALL)}>
                      Accept All
                  </Button>
              </div>
          </section>
      }
    </>
  )
}