import React from "react"
import "../styles/index.scss"
import { LocationProvider } from "@reach/router"
import { ThemeProvider } from 'styled-components'
import Link from 'gatsby-plugin-transition-link/AniLink'

const styledTheme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

const MainLayout = (props) => (
  <LocationProvider>
    {({ location }) => (
      <Layout
        currentLocation={location.pathname}
        action={location.action}
        {...props}
      >
        {props.children}
      </Layout>
    )}
  </LocationProvider>
)

const Layout = (props) => (
  <ThemeProvider theme={styledTheme}>
    <ul>
      <li><Link className="active" to="/first">First</Link></li>
      <li><Link className="" to="/second">Second</Link></li>
      <li><Link className="" to="/third">Third</Link></li>
      <li><Link className="" to="/fourth">Fourth</Link></li>
    </ul>
    <div style={{marginLeft:"25%", padding:"1px 16px", height:"100%"}}>
      <p>
        Hello
      </p>
    </div>
  </ThemeProvider>
)

export default MainLayout
