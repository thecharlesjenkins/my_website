import React, { useState, useEffect, useContext, useRef } from "react"
import { Context as TransitionLinkContext } from "gatsby-plugin-transition-link/context/createTransitionContext"
import { triggerTransition } from "gatsby-plugin-transition-link/utils/triggerTransition"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import mixins from "../../styles/mixins"
import media from "../../styles/media"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../Seo"
import Helmet from "react-helmet"
import SocialContainer from "../SocialMediaContainer"
import Footer from "../page_items/Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyle from "../../styles/GlobalStyle"
import "../../styles/arrows.scss"

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

const order = {
  about_me: [null, "/experience"],
  experience: ["/about_me", "/projects"],
  projects: ["/experience", "/non_technical"],
  non_technical: ["/projects", "/contact_me"],
  contact_me: ["/non_technical", null],
}

let inUse = false
let nextTransition = null

function transitionReady(next, transitionLinkContext) {
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

function transition(transitionLinkContext) {
  const performTransition = (next) => {
    // console.log(inUse)
    if (!inUse) {
      if (next != null) {
        nextTransition = next
        transitionReady(next, transitionLinkContext)
      }
      setTimeout(() => {
        inUse = false
        if (nextTransition != null) {
          transitionReady(nextTransition, transitionLinkContext)
          nextTransition = null
        }
      }, 1000)
      inUse = true
    }
  }

  return {
    up: (path) => {
      performTransition(order[path()][0])
    },
    down: (path) => {
      performTransition(order[path()][1])
    },
  }
}

function addSwipeListeners(ref, trans, path) {
  function process_touchstart(ev) {
    function handle_one_touch() {
      const beginning = ev.touches[0].clientY

      let lastMove = null

      function process_touchmove(move_ev) {
        lastMove = move_ev.touches[0].clientY
      }

      function process_touchend() {
        if (lastMove != null) {
          const diff = lastMove - beginning
          if (diff >= 15 && ref.scrollTop === 0) {
            trans.up(path)
          } else if (
            diff <= -15 &&
            ref.scrollHeight - ref.offsetHeight === ref.scrollTop
          ) {
            trans.down(path)
          }
        }

        ref.removeEventListener("touchend", process_touchend)
        ref.removeEventListener("touchmove", process_touchmove)
      }
      ref.addEventListener("touchend", process_touchend, false)
      ref.addEventListener("touchmove", process_touchmove, false)
    }

    // Use the event's data to call out to the appropriate gesture handlers
    switch (ev.touches.length) {
      case 1:
        handle_one_touch()
        break
      default:
        break
    }
  }

  ref.addEventListener("touchstart", process_touchstart, false)

  return () => {
    ref.removeEventListener("touchstart", addSwipeListeners)
  }
}

const NavigationLayout = (props) => {
  const isMobile = (width) => width <= 800

  const [mobileWidth, setMobileWidth] = useState(false)

  useEffect(() => {
    const resizeEvent = () => {
      setMobileWidth(isMobile(window.innerWidth))
    }

    window.addEventListener("resize", resizeEvent)
    resizeEvent()

    // cleanup this component
    return () => {
      window.removeEventListener("resize", resizeEvent)
    }
  }, [])

  const data = useStaticQuery(query)

  const transitionLinkContext = useContext(TransitionLinkContext)

  const bodyRef = useRef()

  useEffect(() => {
      const path = () => {
        return window.location.pathname.replaceAll("/", "")
      }
      if (path() in order) {
        const trans = transition(transitionLinkContext)
        const ref = bodyRef.current
        const handleScroll = () => {
          if (mobileWidth) {
            if (ref.scrollTop === ref.scrollTopMax) {
              trans.down(path)
            } else if (ref.scrollTop === 0) {
              trans.up(path)
            }
          }
        }

        ref.addEventListener("scroll", handleScroll)

        const removeListeners = addSwipeListeners(ref, trans, path)

        return () => {
          ref.removeEventListener("scroll", handleScroll)
          removeListeners()
        }
      }
  }, [mobileWidth, transitionLinkContext])

  return (
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
        {!mobileWidth && (
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
        )}
        <MainSection ref={bodyRef}>
          <Children>
            {mobileWidth &&
              props.location.pathname.replaceAll("/", "") !== "about_me" && (
                <div className="arrow-container">
                  <div className="arrow up"></div>
                </div>
              )}
            {props.children}
          </Children>
          {mobileWidth &&
            props.location.pathname.replaceAll("/", "") !== "contact_me" && (
              <div className="arrow-container">
                <div className="arrow down"></div>
              </div>
            )}
          {(!mobileWidth ||
            props.location.pathname.replaceAll("/", "") === "contact_me") && (
            <Footer />
          )}
        </MainSection>
      </Body>
      <SocialContainer fixed={true} />
    </div>
  )
}

export default NavigationLayout

const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
