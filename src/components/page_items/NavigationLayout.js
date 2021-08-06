import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { Consumer as TransitionLinkConsumer } from "gatsby-plugin-transition-link/context/createTransitionContext"
import { triggerTransition } from "gatsby-plugin-transition-link/utils/triggerTransition"
import mixins from "../../styles/mixins"
import media from "../../styles/media"
import { graphql, StaticQuery } from "gatsby"
import Seo from "../Seo"
import Helmet from "react-helmet"
import SocialContainer from "../SocialMediaContainer"
import Footer from "../page_items/Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from "../../styles/GlobalStyle"

import AboutMe from "../../pages/about_me"
import Experience from "../../pages/experience"
import Projects from "../../pages/projects"
import NonTechnical from "../../pages/non_technical"
import Contact from "../../pages/contact_me"

const navLinks = [
  {
    name: "About",
    url: "/about_me",
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
    name: "Non Technical",
    url: "/non_technical",
  },
  {
    name: "Contact",
    url: "/contact_me",
  },
]

const order = {
  "/about_me": [null, "/experience"],
  "/experience": ["/about_me", "/projects"],
  "/projects": ["/experience", "/non_technical"],
  "/non_technical": ["/projects", "/contact_me"],
  "/contact_me": ["/non_techincal", null],
}

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  z-index: 11;
  flex-shrink: 0;
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
  flex-direction: row;
  height: 100vh;
  overflow-y: hidden;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  overflow: auto;
`

const Children = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
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

const MobileLayout = (props) => (
  <div {...props}>
    <AboutMe />
    <Experience />
    <Projects />
    <NonTechnical />
    <Contact />
  </div>
)

const transitionUp = (location, transitionLinkContext) => {
  const next = order[location.pathname[0]]
  if (next != null) {
    // TransitionLink expects an event to be passed, so we create a fake one:
    const FakeEvent = new Event("click")
    FakeEvent.persist = () => {}

    // We can finally call "triggerTransition"
    triggerTransition({
      event: FakeEvent,
      to: next,
      exit: {
        length: 0.3,
      },
      entry: {
        length: 0.3,
      },
      ...transitionLinkContext,
    })
  }
}

const transitionDown = (location, transitionLinkContext) => {
  const next = order[location.pathname[1]]
  if (next != null) {
    // TransitionLink expects an event to be passed, so we create a fake one:
    const FakeEvent = new Event("click")
    FakeEvent.persist = () => {}

    // We can finally call "triggerTransition"
    triggerTransition({
      event: FakeEvent,
      to: next,
      exit: {
        length: 0.3,
      },
      entry: {
        length: 0.3,
      },
      ...transitionLinkContext,
    })
  }
}

const NavigationLayout = (props) => {
  const isMobile = (width) => width <= 800

  const [mobileWidth, setMobileWidth] = useState(isMobile(window.innerWidth))

  useEffect(() => {
    const resizeEvent = (event) => {
      setMobileWidth(isMobile(event.target.innerWidth))
    }

    window.addEventListener("resize", resizeEvent)

    // cleanup this component
    return () => {
      window.removeEventListener("resize", resizeEvent)
    }
  }, [])

  console.log("mobile", mobileWidth)

  const transitionLinkContext = useContext(TransitionLinkConsumer)

  const handleScroll = () => {
    if (mobileWidth) {
      if (window.scrollY === window.innerHeight) {
        transitionDown(props.location, transitionLinkContext)
      } else if (window.scrollY === 0) {
        transitionUp(props.location, transitionLinkContext)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
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
            <SideNav>
              <Title className="no-underline" to="/">
                Charles Jenkins
              </Title>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <NavItem key={i}>
                    <NavItemLink
                      className="no-underline"
                      to={url}
                      exit={{
                        length: 2,
                      }}
                      entry={{ delay: 0.5 }}
                    >
                      {name}
                    </NavItemLink>
                  </NavItem>
                ))}
              <ResumeLink>Resume</ResumeLink>
            </SideNav>
            <MainSection>
              <Children>
                {mobileWidth ? props.children : <MobileLayout />}
              </Children>
              <Footer />
            </MainSection>
          </Body>
          <SocialContainer fixed={true} />
        </div>
      )}
    />
  )
}

export default NavigationLayout

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
