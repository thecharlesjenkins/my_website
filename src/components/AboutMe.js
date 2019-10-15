import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SectionTitle from "./sections_title"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about_me/" } }) {
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
          <SectionTitle>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</SectionTitle>
          <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div>
      </div>
  )
}
