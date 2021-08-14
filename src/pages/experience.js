import React from "react"
import SectionTitle from "../components/SectionTitle"
import styled from "styled-components"
import { graphql } from "gatsby"
import media from "../styles/media"
import "../styles/titles.scss"
import Topic from "../components/Topic"
import { gsap } from "gsap"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

import "../styles/tabs.scss"

const ExperienceContainer = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`display: block;`};
`

const Animation = React.forwardRef((props, ref) => (
  <div className="fancy_titles" ref={ref} {...props}>
    <div className="rotation_container">
      <div className="rotated" />
      <div className="stationary">
        <p>Experience</p>
      </div>
    </div>
  </div>
))

const enterAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.from(pageRef, { scale: "2", duration: 1 })
  return timeline
}

const exitAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(pageRef, { scale: "0", duration: 1 })
  return timeline
}

const Internships = ({ data, props }) =>
  data.internships.edges.map((edge, i) => (
    <div key={i} {...props}>
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
          __html: edge.node.html,
        }}
      />
    </div>
  ))

const Clubs = ({ data, props }) =>
  data.clubs.edges.map((edge, i) => (
    <div key={i} {...props}>
      <u>
        <h2>{edge.node.frontmatter.title}</h2>
      </u>
      <div
        dangerouslySetInnerHTML={{
          __html: edge.node.html,
        }}
      />
    </div>
  ))

const Research = ({ data, props }) =>
  data.research.edges.map((edge, i) => (
    <div key={i} {...props}>
      <u>
        <h2>{edge.node.frontmatter.title}</h2>
      </u>
      <div
        dangerouslySetInnerHTML={{
          __html: edge.node.html,
        }}
      />
    </div>
  ))

const Ta = ({ data, props }) =>
  data.ta.edges.map((edge, i) => (
    <div key={i} {...props}>
      <u>
        <h2>{edge.node.frontmatter.title}</h2>
      </u>
      <div
        dangerouslySetInnerHTML={{
          __html: edge.node.html,
        }}
      />
    </div>
  ))

const Experience = ({ data, transitionStatus }) => {
  // console.log(data)
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
    >
      <SectionTitle>My Experience</SectionTitle>
      <ExperienceContainer>
        <Tabs defaultActiveKey="internships" className="mb-3 colored-tabs">
          <Tab eventKey="internships" title="Internships">
            <Internships data={data} />
          </Tab>
          <Tab eventKey="clubs" title="Clubs">
            <Clubs data={data} />
          </Tab>
          <Tab eventKey="research" title="Research">
            <Research data={data} />
          </Tab>
          <Tab eventKey="ta" title="TA">
            <Ta data={data} />
          </Tab>
        </Tabs>
      </ExperienceContainer>
    </Topic>
  )
}

export default Experience

export const query = graphql`
  query {
    internships: allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "/experience/internships/" } }
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
    clubs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/clubs/" } }
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
    research: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/research/" } }
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
    ta: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/ta/" } }
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
