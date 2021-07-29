import React from "react"
import SectionTitle from "../components/SectionTitle"
import { graphql } from "gatsby"
import Topic from "../components/Topic"
import { gsap } from "gsap"

const Animation = React.forwardRef((props, ref) => (
  <div className="fancy_titles" ref={ref} {...props}>
    <div className="book-container">
      <p>Research</p>
      <div className="book">
        <div className="book__page" />
      </div>
    </div>
  </div>
))

const enterAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  // timeline.from(animationRef, { x: "-100vw", duration: 1 })
  // timeline.from(pageRef, { x: "-100vw", duration: 1 })
  return timeline
}

const exitAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  // timeline.to(animationRef, { x: "100vw", duration: 1 })
  // timeline.to(pageRef, { x: "100vw", duration: 1 }, "<.2")
  return timeline
}

const Research = ({ data, transitionStatus }) => {
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
    >
      <SectionTitle>Research</SectionTitle>

    </Topic>
  )
}

export default Research
