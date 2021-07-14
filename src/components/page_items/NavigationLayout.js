import React from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import mixins from "../../styles/mixins"
import media from "../../styles/media"
import { graphql, StaticQuery } from "gatsby"
import GlobalStyle from "../../styles/GlobalStyle"
import Seo from "../Seo"
import Helmet from "react-helmet"
import SocialContainer from "../SocialMediaContainer"
import Footer from "../page_items/Footer"

const navLinks = [
  {
    name: "Contact",
    url: "/contact_me",
  },
  {
    name: "Experience",
    url: "/experience",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "About",
    url: "/about_me",
  },
]

const Container = styled.nav`
  top: 0;
  z-index: 11;
  height: 100%;
`

const SideNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
`

const NavItem = styled.li`
  ${media.phablet`display: none;`};
`

const NavItemLink = styled(Link)`
  padding: 14px 16px;
  ${mixins.underlineAnimation}
`

const Resume = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 15px;
  padding: 1rem 1rem;
  margin: 15px;
`

const Title = styled(Link)`
  font-size: 30px;
  padding: 0px 10px 10px 10px;
  ${mixins.underlineAnimation}
`

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const MainSection = styled.div`
  flex: 1 0 auto;
`

const ResumeLink = ({ children }) => (
  <a
    href="/charles_jenkins_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Resume>{children}</Resume>
  </a>
)

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const NavigationLayout = (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <div>
        <GlobalStyle />
        <Seo />
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://thecharlesjenkins.com" />
          <link rel="icon" href="favicon.ico" />
        </Helmet>
        <Body>
          <Container>
            <SideNav>
              <Title className="no-underline" to="/">
                Charles Jenkins
              </Title>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <NavItem key={i}>
                    <NavItemLink className="no-underline" to={url}>
                      {name}
                    </NavItemLink>
                  </NavItem>
                ))}
              <ResumeLink>Resume</ResumeLink>
            </SideNav>
          </Container>
          <MainSection>
            {props.children}
            <Footer />
          </MainSection>
        </Body>
        <SocialContainer fixed={true} />
      </div>
    )}
  />
)

export default NavigationLayout
