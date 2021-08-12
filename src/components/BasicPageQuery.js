import React from "react"
import SectionTitle from "./SectionTitle"

const BasicPageQuery = (props) =>
  props.data.allMarkdownRemark.edges.map((edge, i) => (
    <div key={i}>
      <SectionTitle>{edge.node.frontmatter.title}</SectionTitle>
      <div
        dangerouslySetInnerHTML={{
          __html: edge.node.html,
        }}
      />
    </div>
  ))

export default BasicPageQuery
