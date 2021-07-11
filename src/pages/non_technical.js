import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SectionTitle from "../components/SectionTitle"
import ClimbingAnimation from "../components/animations/climbing"

const images = [<ClimbingAnimation />]

const NonTechnical = ({ data, transitionStatus }) => {
  useEffect(() => {
    console.log('Non_Technical', transitionStatus);
  }, [transitionStatus]);
  return (
    <>
      <SectionTitle>Non-Technical Things</SectionTitle>
      {data.allMarkdownRemark.edges.map((edge, i) => {
        const items = [
          <div
            style={{
              width: "100%",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
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
            {items[i % 2]}
            {/* Gets other item */}
            {items[~(i % 2) + 2]}
          </div>
        )
      })}
    </>
  )
}

export default NonTechnical

export const query = graphql`
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
`
