import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import AboutMe from "../components/page_items/AboutMe"
import ContactMe from "../components/page_items/ContactMe"
import Projects from "../components/page_items/Projects"
import GlobalStyle from "../styles/GlobalStyle"
import Footer from "../components/page_items/Footer"
import Navigation from "../components/page_items/Navigation"
import Layout from "../components/Layout"


export default ({ data }) => (
  <Layout>
  <div>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="https://thecharlesjenkins.com/" />
      <link rel="icon" href="best_charlemagne.ico" />
    </Helmet>
    <Navigation />
    <div style={{ maxWidth: "75vw", margin: "4rem auto" }}>
      <h4>Hello, I am</h4>
      <h1>Charles Jenkins</h1>
      <h4>a software engineer</h4>
      <div>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
      </div>
    </div>
    <Footer />
  </div>
  </Layout>
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
