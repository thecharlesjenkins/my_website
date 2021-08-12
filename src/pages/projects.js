import React from "react"
import SectionTitle from "../components/SectionTitle"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import media from "../styles/media"
import Topic from "../components/Topic"
import { gsap } from "gsap"

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

const Animation = React.forwardRef((props, ref) => (
  <div className="fancy_titles" ref={ref} {...props}>
    <div className="project_button">
      <div className="bounding">
        <div className="bouncing">
          <p>Projects</p>
          {[...Array(11).keys()].map((index) => {
            return <div className="bubble" key={`bubble_${index}`} />
          })}
        </div>
      </div>
    </div>
  </div>
))

const enterAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.from(animationRef, { x: "-100vw", duration: 1 })
  timeline.from(pageRef, { x: "-100vw", duration: 1 })
  return timeline
}

const exitAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(animationRef, { x: "100vw", duration: 1 })
  timeline.to(pageRef, { x: "100vw", duration: 1 }, "<.2")
  return timeline
}

const Projects = ({ data, transitionStatus }) => {
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
    >
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
    </Topic>
  )
}

export default Projects

export const query = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [frontmatter___order], order: ASC},
      filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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
