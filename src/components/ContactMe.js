import React from "react"
import SectionTitle from "./sections_title"
import { graphql, useStaticQuery } from "gatsby"
import SocialContainer from "./SocialMediaContainer"

// const SocialContainer = styled.div`
// width: 40px;
// position: fixed;
// align-items: center;
// white-space: nowrap;
// bottom: 0;
// left: 40px;

//   &:after {
//     content: '';
//     display: block;
//     height: 100px;
//     width: 1px;
//     background-color: gray
//     border-radius: 25px;
//     top: -5px;
//     margin-left: 16.5px;
//   }
// `

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
