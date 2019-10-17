import React from "react"
import SectionTitle from "./sections_title"
import { graphql, useStaticQuery } from "gatsby"
import SocialContainer from "./SocialMediaContainer"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
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
      <SectionTitle>
        {data.allMarkdownRemark.edges[0].node.frontmatter.title}
      </SectionTitle>
      <div align="center">
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        ></div>
        <a href="mailto:thecharlesjenkins@gmail.com">
          <button>Email me</button>
        </a>
      </div>
      <SocialContainer fixed={true} />
    </div>
  )
}
