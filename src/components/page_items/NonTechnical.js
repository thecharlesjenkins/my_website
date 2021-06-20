import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionTitle from "../SectionTitle"
import ClimbingAnimation from "../animations/climbing"

const images = [<ClimbingAnimation/>]

const NonTechnical = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/non_technical/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              imageNum
              text
            }
            html
          }
        }
      }
    }
  `)

  return (
    <div>
      <SectionTitle>Non-Technical Things</SectionTitle>
      {data.allMarkdownRemark.edges.map((edge, i) => {
        const items = [
          <div style={{width: "100%", marginTop: "auto", marginBottom: "auto"}}>
            <div>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.text}</p>
            </div>
          </div>,
          images[edge.node.frontmatter.imageNum],
        ]
        return (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignContent: "center",
            }}
            key={i}
          >
            {/* Alternates between having image on the left and right */}
            {items[i%2]}
            {/* Gets other item */}
            {items[~(i%2) + 2]}
          </div>
        )
      })}
    </div>
  )
}

export default NonTechnical
