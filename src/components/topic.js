import React, { useEffect } from "react"
import SectionTitle from "./SectionTitle"
import "../styles/titles.scss"

const Topic = (props) => {
  useEffect(() => {
    console.log("topic", props.transitionStatus)
  }, [props.transitionStatus])

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <props.Animation />
      </div>
      <div>
        {props.data.allMarkdownRemark.edges.map((edge, i) => (
          <div key={i}>
            <SectionTitle>{edge.node.frontmatter.title}</SectionTitle>
            <div
              dangerouslySetInnerHTML={{
                __html: edge.node.html,
              }}
            />
          </div>
        ))}
        {props.children}
      </div>
    </>
  )
}

export default Topic
