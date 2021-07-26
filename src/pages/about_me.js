import React from "react"
import { graphql } from "gatsby"
import "../styles/titles.scss"
import Topic from "../components/Topic"
import BasicPageQuery from "../components/BasicPageQuery"
import { gsap } from "gsap"

const Animation = React.forwardRef((props, ref) => (
  <div className="fancy_titles" ref={ref} {...props}>
    <div className="about_me_button">
      <p id="clicky">About Me</p>
    </div>
  </div>
))

const enterAnimation = (animationRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.from(animationRef, { x: "-100vw", duration: 1 })
  timeline.from(pageRef, { x: "-100vw", duration: 1 })
  return timeline
}

const exitAnimation = (animationRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(animationRef, { x: "100vw", duration: 1 })
  timeline.to(pageRef, { x: "100vw", duration: 1 }, "<.2")
  return timeline
}

const AboutMe = ({ data, transitionStatus }) => {
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
    >
      <BasicPageQuery data={data} />
    </Topic>
  )
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
