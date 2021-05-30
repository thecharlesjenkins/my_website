import React from "react"
import SectionTitle from "../SectionTitle"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import media from "../../styles/media"

const ExperienceContainer = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`display: block;`};
`

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        edges {
          node {
            frontmatter {
              company
              title
              link
              dates
            }
            html
          }
        }
      }
    }
  `)
  return (
    <div id="experience">
      <SectionTitle>My Experience</SectionTitle>
      <ExperienceContainer>
        {data.allMarkdownRemark.edges.map((edge, i) => (
          <div key={i}>
            <a
              href={edge.node.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            ><u>
              <h2>
                {edge.node.frontmatter.company}: {edge.node.frontmatter.title}
              </h2>
              </u>
            </a>
            <h4>
              {edge.node.frontmatter.dates}
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data.allMarkdownRemark.edges[0].node.html,
              }}
            />
          </div>
        ))}
      </ExperienceContainer>
    </div>
  )
}

export default Experience;
