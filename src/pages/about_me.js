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

const enterAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(pageRef, { rotate: 45 }, 0)
  timeline.to(pageRef, { opacity: 1 })
  timeline.from(bodyRef, { x: "-100vw" })
  timeline.from(animationRef, { x: "-100vw" })
  timeline.to(pageRef, { rotate: 0 })
  return timeline
}

const exitAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(pageRef, { rotation: 45 })
  timeline.to(animationRef, { x: "100vw" })
  timeline.to(bodyRef, { x: "100vw" })
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
      mobileShrink={0.6}
    >
      <h4>Hello, I am</h4>
      <h1>Charles Jenkins</h1>
      <h4 id="about">a software engineer</h4>
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
