import React from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { graphql } from 'gatsby'
import BlogButton from "../components/animations/blogbutton"

import Topic from "../components/Topic"
import gsap from "gsap"

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
`

const ListItem = styled.div`
  list-style-type: none;
`

const BlogEntry = ({ title, top_color, bottom_color, date, brief }) => (
  <BlogButton text={title} top_color={top_color} bottom_color={bottom_color} date={date} brief={brief}>
  </BlogButton>
)

// Playing twice so disable for now
const enterAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  return timeline
}

const exitAnimation = (animationRef, bodyRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(pageRef, { x: "100vw", duration: 1 }, "<.2")
  return timeline
}

const colors = [
  { top_color: "#116466", bottom_color: "#71d99a" },
  { top_color: "#F64C72", bottom_color: "#F172A1" }
]

const Blog = ({ data, transitionStatus }) => {
  return (
    <Topic
      transitionStatus={transitionStatus}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
    >
      <MainSection>
        <h1>Modern Software Blog</h1>
        <h5>By Charles Jenkins</h5>
        <ul>
          {data.blog.nodes.map((post, i) => (
            <ListItem key={post.parent.name}>
              <Link to={`/blog/${post.parent.name}`}>
                <BlogEntry title={post.frontmatter.title} top_color={colors[i % 2].top_color} bottom_color={colors[i % 2].bottom_color} date={post.frontmatter.date} brief={post.frontmatter.brief}></BlogEntry>
              </Link>
            </ListItem>
          ))}
        </ul>
      </MainSection>
    </Topic>
  )
}

export default Blog

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          brief
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`