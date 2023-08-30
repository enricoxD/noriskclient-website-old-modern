"use client"
import {Dispatch, SetStateAction, useState} from "react"
import Image from "next/image"
import SyntaxHighlighter from 'react-syntax-highlighter'
import {atelierCaveDark} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import {Media, MediaProps} from "@/components/global/textmedia/Media";

interface TabProps {
  name: string,
}

interface CodeTabProps extends TabProps {
  language: string,
  content: string,
  linesToHighlight?: number[],
}

interface MediaTabProps extends TabProps, MediaProps {
  icon: string,
}

export interface CodeProps {
  mediaTab?: MediaTabProps
  codeTabs: CodeTabProps[]
}

const TabButton = ({tab, currentTab, setTab}: {
  tab: TabProps,
  currentTab: TabProps,
  setTab: Dispatch<SetStateAction<TabProps>>
}) => {
  const imageSrc = "language" in tab ? `/${tab.language}.svg` : "icon" in tab ? `${tab.icon}` : "/"
  return (
    <div className={`tab-button ${tab == currentTab ? "active" : "inactive"}`} key={`tab-${tab.name}`}
         onClick={() => setTab(tab)}>
      <span className={"bottom-corner-left"}/>
      <span className={"bottom-corner-left-overlaying"}/>
      <div className={"tab-name"}>
        <Image src={imageSrc} alt={tab.name} width={18} height={18}/>
        {tab.name}
      </div>
      <span className={"bottom-corner-right"}/>
      <span className={"bottom-corner-right-overlaying"}/>
    </div>
  )
}

const TabContent = ({tab}: { tab: TabProps }) => {
  if ('language' in tab) {
    const codeTab = tab as CodeTabProps

    return (
      <SyntaxHighlighter
        language={codeTab.language}
        style={atelierCaveDark}
        useInlineStyles={false}
        showLineNumbers
        wrapLines
        lineNumberContainerStyle={{
          minWidth: "2.25em"
        }}
        lineNumberStyle={(lineNumber) => {
          return {
            fontFamily: "\"Roboto-Regular\", sans-serif",
            width: '2.25em',
/*          color: codeTab.linesToHighlight.includes(lineNumber) ? "#28C840" : "#738A94CC",
            backgroundColor: codeTab.linesToHighlight.includes(lineNumber) ? "#266539" : "#0A0E13",*/
            color: "#738A94CC",
            backgroundColor: "#0A0E13"
          }
        }}
        /*lineProps={(lineNumber) => {
          const style: any = {}
          if (codeTab.linesToHighlight.includes(lineNumber)) {
            style.backgroundColor = "rgba(0, 255, 0, 0.2)"
          }
          return {style}
        }}*/
      >
        {codeTab.content}
      </SyntaxHighlighter>
    )
  } else {
    const imageTab = tab as MediaTabProps
    return (
      <div className={"media-wrapper"}>
        <Media
          animation={imageTab.animation}
          mediaType={imageTab.mediaType}
          videoId={imageTab.videoId}
          imageUrl={imageTab.imageUrl}
          imageAlt={imageTab.imageAlt}
          className={imageTab.className}
        />
      </div>
    )
  }
}

export const Code = ({mediaTab, codeTabs}: CodeProps) => {
  const allTabs = mediaTab ? [mediaTab, ...codeTabs] : codeTabs
  const [currentTab, setTab] = useState<TabProps>(allTabs[0])

  return (
    <div className={"code-block"}>
      <div className={"title-bar"}>
        <div className={"title-bar-buttons"}>
          <span className={"close"}/>
          <span className={"zoom"}/>
          <span className={"minimize"}/>
        </div>
        <div className={"tab-list"}>
          {allTabs.map((tab) => {
            return <TabButton tab={tab} currentTab={currentTab} setTab={setTab} key={`tab-${tab.name}`}/>
          })}
        </div>
      </div>
      <div>
        <TabContent tab={currentTab}/>
      </div>
    </div>
  )
}