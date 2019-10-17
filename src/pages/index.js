import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import GlobalStyle from "../styles/GlobalStyle"
import Footer from "../components/Footer"

export default ({ data }) => (
  <div>
    <div style={{ maxWidth: "75vw", margin: "3rem auto" }}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="https://thecharlesjenkins.com/" />
        <link rel="icon" href="best_charlemagne.ico" />
      </Helmet>
      <h4>Hello, I am</h4>
      <h1>Charles Jenkins</h1>
      <div>
        <AboutMe />
        <ContactMe />
      </div>
    </div>
    <Footer />
  </div>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
