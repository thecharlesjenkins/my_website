import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SectionTitle from "../components/SectionTitle"
import "../styles/titles.scss"
import Topic from "../components/topic"

// const AboutMe = ({ data, transitionStatus }) => {
//   useEffect(() => {
//     console.log("AboutMe", transitionStatus)
//   }, [transitionStatus])
//   return (
//     <>
//       <div className="fancy_titles">
//         <div className="about_me_button">
//           <p id="clicky">About Me</p>
//         </div>
//       </div>
//       {data.allMarkdownRemark.edges.map((edge, i) => (
//         <div key={i}>
//           <SectionTitle>{edge.node.frontmatter.title}</SectionTitle>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: edge.node.html,
//             }}
//           />
//         </div>
//       ))}
//     </>
//   )
// }

const animation = () => {
  return (
    <div className="fancy_titles">
      <div className="about_me_button">
        <p id="clicky">About Me</p>
      </div>
    </div>
  )
}

const AboutMe = ({ transitionStatus }) => {
  return Topic(transitionStatus, query, animation)
}

export default AboutMe

const query = graphql`
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
