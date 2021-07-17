import React, { useEffect } from "react"
import SectionTitle from "./SectionTitle"
import "../styles/titles.scss"

const topic = (transitionStatus , query, animation) => {
  useEffect(() => {
    console.log("topic", transitionStatus)
  }, [transitionStatus])

  return (
    <StaticQuery
      query={query}
      render={() => {
        return (
          <>
            {animation}
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
      }}
    />
  )
}

export default topic
