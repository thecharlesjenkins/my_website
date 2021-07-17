import React from "react"
import SectionTitle from "../components/SectionTitle"
import styled from "styled-components"
import { graphql } from "gatsby"
import media from "../styles/media"
import "../styles/titles.scss"
import Topic from "../components/Topic"

const ExperienceContainer = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`display: block;`};
`

const Animation = () => (
  <div className="fancy_titles">
    <div className="rotation_container">
      <div className="rotated" />
      <div className="stationary">
        <p>Experience</p>
      </div>
    </div>
  </div>
)

const Experience = ({ data, transitionStatus }) => {
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
    >
      <SectionTitle>My Experience</SectionTitle>
      <ExperienceContainer>
        {data.allMarkdownRemark.edges.map((edge, i) => (
          <div key={i}>
            <a
              className="no-underline"
              href={edge.node.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>
                <h2>
                  {edge.node.frontmatter.company}: {edge.node.frontmatter.title}
                </h2>
              </u>
            </a>
            <h4>{edge.node.frontmatter.dates}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data.allMarkdownRemark.edges[0].node.html,
              }}
            />
          </div>
        ))}
      </ExperienceContainer>
    </Topic>
  )
}

export default Experience

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/experience/" } }) {
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
`
