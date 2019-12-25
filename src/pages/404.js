import React from 'react'
import GlobalStyle from "../styles/GlobalStyle"
import Footer from "../components/page_items/Footer"
import Navigation from "../components/page_items/Navigation"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"


const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
  padding: 1.25rem 1.75rem;
`

export default ({data}) => (
    <div>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="https://thecharlesjenkins.com/404" />
      <link rel="icon" href="best_charlemagne.ico" />
    </Helmet>
    <Navigation />
    <div style={{ maxWidth: "75vw", margin: "4rem auto"}}>
      <h4>Hello, I am</h4>
      <h1>Charles Jenkins</h1>
      <h4 id="about">a software engineer</h4>
      <h4>But it looks like you got lost.</h4>
      <h4>Let me help you: </h4>
      <a href="/"><Button>Back to the 'Real World'</Button></a>
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
