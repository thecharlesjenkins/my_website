import React from "react"
import SectionTitle from "./sections_title"
import { graphql, useStaticQuery } from "gatsby"
import SocialLink from "./SocialLink"
import styled from "styled-components"
import Button from "./Button"

const SocialContainer = styled.div`
width: 40px;
position: fixed;
align-items: center;
white-space: nowrap;
bottom: 0;
left: 40px;

  &:after {
    content: '';
    display: block;
    height: 100px;
    width: 1px;
    background-color: gray
    border-radius: 25px;
    top: -5px;
    margin-left: 16.5px;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
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
    // console.log(data.allMarkdownRemark.edges[0].node)
  return (
    <div>
      <SectionTitle>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</SectionTitle>
      <div align="center">
        <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div>
        <a href="mailto:thecharlesjenkins@gmail.com"><button>Email me</button></a>
      </div>
      <SocialContainer>
        {data.site.siteMetadata.social.map(({ name, url }, i) => <SocialLink link={url} social={name} key={i}/>)}
      </SocialContainer>
    </div>
  )
}
