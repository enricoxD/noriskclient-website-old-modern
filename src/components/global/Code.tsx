"use client"
import {useState} from "react";
import Image from "next/image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atelierCaveDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface TabProps {
  name: string,
  inner: string,
  icon: string,
}

interface CodeTabProps extends TabProps {
  language: string,
  linesToHighlight: number[]
}

interface CodeProps {
  otherTabs: TabProps[]
  codeTabs: CodeTabProps[]
}

export const Code = ({codeTabs}: CodeProps) => {
  const [currentTab, setTab] = useState(codeTabs[0])

  return (
    <div className={"code-block"}>
      <div className={"title-bar"}>
        <div className={"title-bar-buttons"}>
          <circle className={"close"}/>
          <circle className={"zoom"}/>
          <circle className={"minimize"}/>
        </div>
        <div className={"tab-list"}>
          {codeTabs.map((tab, index) => {
            return (
              <div className={`tab-button ${tab == currentTab ? "active" : "inactive"}`} key={`tab-${tab.name}`}
                   onClick={() => setTab(tab)}>
                <span className={"bottom-corner-left"}/>
                <span className={"bottom-corner-left-overlaying"}/>
                <div className={"tab-name"}>
                  <Image src={`/${tab.language}.svg`} alt={tab.language} width={18} height={18}/>
                  {tab.name}
                </div>
                <span className={"bottom-corner-right"}/>
                <span className={"bottom-corner-right-overlaying"}/>
              </div>
            )
          })}
        </div>
      </div>
      <SyntaxHighlighter
        language={currentTab.language} style={atelierCaveDark} useInlineStyles={false}
        showLineNumbers wrapLines
        lineNumberContainerStyle={{
          minWidth: "2.25em"
        }}
        lineNumberStyle={(lineNumber) => {
          return {
            width: '2.25em',
            color: currentTab.linesToHighlight.includes(lineNumber) ? "#28C840" : "#738A94CC",
            backgroundColor: currentTab.linesToHighlight.includes(lineNumber) ? "#266539" : "#0A0E13"
          }
        }}
        lineProps={(lineNumber) => {
          const style: any = {};
          if (currentTab.linesToHighlight.includes(lineNumber)) {
            style.backgroundColor = "rgba(0, 255, 0, 0.2)";
          }
          return {style};
        }}
      >
        {currentTab.inner}
      </SyntaxHighlighter>
    </div>
  )
}