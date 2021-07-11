import React, { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import media from "../styles/media"

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

const Projects = ({ data, transitionStatus }) => {
  useEffect(() => {
    console.log('Projects', transitionStatus);
  }, [transitionStatus]);
  return (
    <>
      <SectionTitle>My Projects</SectionTitle>
      <CardContainer>
        {data.allMarkdownRemark.edges.map((edge, i) => (
          <Card key={i}>
            <a
              className="no-underline"
              href={edge.node.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectTitle>{edge.node.frontmatter.title}</ProjectTitle>

              <GatsbyImage
                image={
                  edge.node.frontmatter.picture.childImageSharp.gatsbyImageData
                }
                alt={edge.node.frontmatter.title}
              />
            </a>
          </Card>
        ))}
      </CardContainer>
      <div id="contact"></div>
    </>
  )
}

export default Projects

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          frontmatter {
            title
            link
            picture {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
