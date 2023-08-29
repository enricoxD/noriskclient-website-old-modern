"use client"
import {Dispatch, SetStateAction, useState} from "react"
import Image from "next/image"
import SyntaxHighlighter from 'react-syntax-highlighter'
import {atelierCaveDark} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import {motion, AnimatePresence} from 'framer-motion';

interface TabProps {
  name: string,
  content: string,
}

interface CodeTabProps extends TabProps {
  language: string,
  linesToHighlight: number[]
}

interface ImageTabProps extends TabProps {
  icon: string,
}

export interface CodeProps {
  otherTab?: ImageTabProps
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
  if ('language' in tab && 'linesToHighlight' in tab) {
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
/*            color: codeTab.linesToHighlight.includes(lineNumber) ? "#28C840" : "#738A94CC",
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
    const imageTab = tab as ImageTabProps
    return (
      <div className={"inner-image-wrapper"}>
        <Image src={imageTab.content} alt={imageTab.name} fill/>
      </div>
    )
  }
}

export const Code = ({otherTab, codeTabs}: CodeProps) => {
  const allTabs = otherTab ? [otherTab, ...codeTabs] : codeTabs
  const [currentTab, setTab] = useState<TabProps>(allTabs[0])

  return (
    <div className={"code-block"}>
      <div className={"title-bar"}>
        <div className={"title-bar-buttons"}>
          <circle className={"close"}/>
          <circle className={"zoom"}/>
          <circle className={"minimize"}/>
        </div>
        <div className={"tab-list"}>
          {allTabs.map((tab) => {
            return <TabButton tab={tab} currentTab={currentTab} setTab={setTab} key={`tab-${tab.name}`}/>
          })}
        </div>
      </div>
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={currentTab.name}
          initial={{opacity: 0.2}}
          animate={{opacity: 1}}
          exit={{opacity: 0.2}}
          transition={{duration: 0.1, ease: 'easeInOut'}}
        >
          <TabContent tab={currentTab}/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}