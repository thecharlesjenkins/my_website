import React, { useEffect } from "react"
import SectionTitle from "./SectionTitle"
import "../styles/titles.scss"

const Topic = (data, transitionStatus, Animation) => {
  useEffect(() => {
    console.log("topic", transitionStatus)
  }, [transitionStatus])

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Animation />
      </div>
      {data.allMarkdownRemark.edges.map((edge, i) => (
        <div key={i}>
          <SectionTitle>{edge.node.frontmatter.title}</SectionTitle>
          <div
            dangerouslySetInnerHTML={{
              __html: edge.node.html,
            }}
          />
        </div>
      ))}
    </>
  )
}

export default Topic
