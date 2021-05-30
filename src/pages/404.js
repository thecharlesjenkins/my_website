import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import Footer from "../components/page_items/Footer"
import Navigation from "../components/page_items/Navigation"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import SocialContainer from "../components/SocialMediaContainer"
import Seo from "../components/Seo"

const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
  padding: 1.25rem 1.75rem;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const Content = styled.div`
  margin: 4rem auto;
  flex: 1 auto;
`

const TakeMeBack = styled.div`
  padding-top: 4rem;
  text-align: center;
`

const errorPage = ({ data }) => (
  <Body>
    <GlobalStyle />
    <Seo
      pathname="/404"
      description="This is not a path for Charles Jenkins' personal website. Try the root url for better results."
    />
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="https://thecharlesjenkins.com/404" />
      <link rel="icon" href="favicon.ico" />
    </Helmet>
    <Navigation />
    <Content>
      <TakeMeBack>
        <h1>404</h1>
        <h4>It looks like you got lost.</h4>
        <h4>Let me help you out: </h4>
        <a href="/">
          <Button>Back to the 'Real World'</Button>
        </a>
      </TakeMeBack>
    </Content>
    <SocialContainer fixed={true} />
    <Footer />
  </Body>
)

export default errorPage;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
