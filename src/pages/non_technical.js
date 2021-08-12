import React from "react"
import { graphql } from "gatsby"
import SectionTitle from "../components/SectionTitle"
import ClimbingAnimation from "../components/animations/climbing"
import Topic from "../components/Topic"
import { gsap } from "gsap"

const images = [<ClimbingAnimation />]

const Animation = React.forwardRef((props, ref) => (
  <div className="fancy_titles" ref={ref} {...props}>
    <div className="fancy_titles dash_container">
      <div className="speedy">
        <p>Non-Technical</p>
      </div>
      {[...Array(11).keys()].map((index) => {
        return <div className="line" key={`line_${index}`} />
      })}
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

const NonTechnical = ({ data, transitionStatus }) => {
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
      mobileShrink={0.5}
    >
      <SectionTitle>Non-Technical Things</SectionTitle>
      <div>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          const items = [
            <div
              style={{
                width: "100%",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.text}</p>
              </div>
            </div>,
            images[edge.node.frontmatter.imageNum],
          ]
          return (
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                alignContent: "center",
              }}
              key={i}
            >
              {/* Alternates between having image on the left and right */}
              {items[i % 2]}
              {/* Gets other item */}
              {items[~(i % 2) + 2]}
            </div>
          )
        })}
      </div>
    </Topic>
  )
}

export default NonTechnical

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/non_technical/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            imageNum
            text
          }
        }
      }
    }
  }
`
