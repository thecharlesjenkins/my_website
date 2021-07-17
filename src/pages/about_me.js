import React from "react"
import { graphql } from "gatsby"
import "../styles/titles.scss"
import Topic from "../components/topic"

const Animation = () => {
  return (
    <div className="fancy_titles">
      <div className="about_me_button">
        <p id="clicky">About Me</p>
      </div>
    </div>
  )
}

const AboutMe = ({ data, transitionStatus }) => {
  return Topic(data, transitionStatus, query, Animation)
}

export default AboutMe

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about_me/" } }
      sort: { fields: [frontmatter___title], order: ASC }
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
`
