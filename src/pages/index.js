import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import AboutMe from "../components/page_items/AboutMe"
import ContactMe from "../components/page_items/ContactMe"
import Projects from "../components/page_items/Projects"
import GlobalStyle from "../styles/GlobalStyle"
import Footer from "../components/page_items/Footer"
import Navigation from "../components/page_items/Navigation"
import seo from "../components/seo"
import SocialContainer from "../components/SocialMediaContainer"
import Experience from "../components/page_items/Experience"

const index = ({ data }) => (
  <div>
    <GlobalStyle />
    <seo />
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="https://thecharlesjenkins.com" />
      <link rel="icon" href="best_charlemagne.ico" />
    </Helmet>
    <Navigation />
    <div style={{ maxWidth: "75vw", margin: "4rem auto" }}>
      <h4>Hello, I am</h4>
      <h1>Charles Jenkins</h1>
      <h4 id="about">a software engineer</h4>
      <div>
        <AboutMe />
        <Projects />
        <Experience />
        <ContactMe />
      </div>
    </div>
    <SocialContainer fixed={true} />
    <Footer />
  </div>
)

export default index;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
