import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors } = theme
require("@fontsource/noto-sans-tc")

const GlobalStyle = createGlobalStyle`
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
    background-color: ${colors.darkBlue};
    color: ${colors.offwhite};
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
      color: ${colors.lightGreen};
      background-color: ${colors.darkGreen};
      &:hover {
        color: ${colors.darkGreen};
        background-color: ${colors.lightGreen};
      }
    }

    .raise {
      transition: all .25s;
      path {
        transition: all .5s;
      }
      &:hover {
        transform: translateY(-3px);
        path{
          fill: ${colors.lightGreen};
        }
      }
    }
    h3 {
      color: ${colors.lightPink};
    }
    footer {
      background-color: ${colors.darkGray};
    }
    nav {
      background-color: ${colors.darkGray};
    }
    }
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
    color: ${colors.offwhite};
    &:hover {
      color: ${colors.offwhite};
    }
  }
  .no-underline {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }
  p {
    margin: 0 0 15px 0;
  }
`

export default GlobalStyle
