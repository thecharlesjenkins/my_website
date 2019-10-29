import React from "react"
import SectionTitle from "../SectionTitle"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import media from "../../styles/media"
import Section from "../Section"


const CardContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`display: block;`};
`
const Card = styled.div`
  margin: 0 50px 0 0;
  flex: 1 1 160px;
`

const ProjectTitle = styled.h4`
  margin: 30px 0 10px 0px;
  white-space: nowrap;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              title
              link
              picture {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section id="projects">
      <SectionTitle>My Projects</SectionTitle>
      <CardContainer>
        {data.allMarkdownRemark.edges.map(edge => (
          <Card>
            <a
              href={edge.node.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>{edge.node.frontmatter.title}</ProjectTitle>

              <Img
                fixed={edge.node.frontmatter.picture.childImageSharp.fixed}
              />
            </a>
          </Card>
        ))}
      </CardContainer>
    </Section>
  )
}
