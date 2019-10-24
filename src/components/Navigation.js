import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import mixins from "../styles/mixins"

const navLinks = [
  {
    name: "Contact",
    url: "/#contact",
  },
  // {
  //   name: "Projects",
  //   url: "/#projects",
  // },
  // {
  //   name: "Experience",
  //   url: "/#jobs",
  // },
  {
    name: "About",
    url: "/#about",
  },
]

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
`

const TopNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`

const NavItem = styled.li`
  float: right;
`

const NavItemLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 14px 16px;
  ${mixins.underlineAnimation}
`

// const Navbar = styled.nav`
// display: flex;
// justify-content: space-between;
// align-items: center;
// position: relative;
// width: 100%;
// counter-reset: item 0;
// z-index: 12;
// `

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
// `

// const NavList = styled.ol`
//   div {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
// `

// const NavListItem = styled.li`
//   margin: 0 10px;
//   position: relative;
//   &:before {
//     text-align: right;
//   }
// `

// const NavLink = styled(Link)`
//   padding: 12px 10px;
// `

// const ItemList = styled.ul``
const Resume = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 15px;
  padding: 1rem 1rem;
  margin-right: 10px;
  float: right;
`

const Title = styled.a`
  float: left;
  font-size: 30px;
  padding: 0px 10px 10px 10px;
  ${mixins.underlineAnimation}
`

const Right = styled.a`
  float: right;
`

const ResumeLink = ({ children }) => (
  <Right href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    <Resume>{children}</Resume>
  </Right>
)

export default () => (
  <Container>
    <TopNav>
      <Title>Charles Jenkins</Title>
      <ResumeLink>Resume</ResumeLink>
      {navLinks &&
        navLinks.map(({ url, name }, i) => (
          <NavItem key={i}>
            <NavItemLink to={url}>{name}</NavItemLink>
          </NavItem>
        ))}
    </TopNav>
  </Container>
)
