import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SectionTitle from "../components/SectionTitle"

const AboutMe = ({ data, transitionStatus }) => {
  useEffect(() => {
    console.log('AboutMe', transitionStatus);
  }, [transitionStatus]);
  return (
    <>
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

export default AboutMe

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about_me/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
