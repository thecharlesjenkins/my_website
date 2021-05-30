import { createGlobalStyle } from "styled-components"
import theme from "./theme"
require("@fontsource/noto-sans-tc")
const { colors } = theme

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    transition: all 1s ease;
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    font-family: 'Noto Sans TC', sans-serif;
    &.hidden {
      overflow: hidden;
    }
    
    button {
      transition: all 1s;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      &:hover,
      &:focus,
      &:active {
        outline: none;
      }
      &:after {
        display: none !important;
      }
    }

    svg {
      transition: all .25s;
      path {
        transition: all .5s;
      }
      &:hover {
        transform: translateY(-3px);
      }
    }
    background-color: ${colors.darkBlue};
    color: ${colors.offwhite};
    h3 {
      color: ${colors.lightPink};
    }
    path {
      fill: ${colors.offwhite};
    }
    button {
      color: ${colors.lightGreen};
      background-color: ${colors.darkGreen};
      &:hover {
        color: ${colors.darkGreen};
        background-color: ${colors.lightGreen};
      }
    }
    footer {
      background-color: ${colors.darkGray};
    }
    svg {
      &:hover {
        path{
          fill: ${colors.lightGreen};
        }
      }
    }
    nav {
      background-color: ${colors.darkGray};
    }
    }
  }
  ::selection {
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    margin: 0 0 10px 0;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
  }
  p {
    margin: 0 0 15px 0;
  }
`

export default GlobalStyle
