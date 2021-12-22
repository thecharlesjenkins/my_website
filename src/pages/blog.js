import React from "react"
import { graphql, Link } from 'gatsby'

const Blog = ({ data, transitionStatus }) => {
  return (
    <div>
      {data.blog.nodes.map(post => (
        <li key={post.parent.name}>
          <Link to={`/blog/${post.parent.name}`}>
            {post.frontmatter.title}
          </Link>
        </li>
      ))}
    </div>
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