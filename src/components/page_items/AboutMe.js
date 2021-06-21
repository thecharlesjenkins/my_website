import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionTitle from "../SectionTitle"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about_me/" } }
        sort: {
          fields: [frontmatter___title]
          order: ASC
        }
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
  `)

  return (
    <div>
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
    </div>
  )
}

export default AboutMe
