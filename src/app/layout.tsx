import {NavBar} from "@/components/NavBar";
import "@/styles/styles.scss"
import {Footer} from "@/components/Footer";
import React from "react";
import {CookieConsent} from "@/components/CookieConsent";

export const metadata = {
  title: 'NoRisk Client',
  description: 'Community-oriented Minecraft Modpack Client providing unique cosmetics and features.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"layout"}>
        <CookieConsent />
        <NavBar />
        <div className={"main-content"}>
            {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
