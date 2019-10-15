import { createGlobalStyle } from 'styled-components'
import theme from "./theme"
require("typeface-noto-sans-tc")
console.log(theme)
const {colors} = theme

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
      border: 1px solid;
      border-radius: 5px;
      font-size: 20px;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      padding: 1.25rem 1.75rem;
      &:hover,
      &:focus,
      &:active {
        outline: none;
      }
      &:after {
        display: none !important;
      }
    }
  }
  body.light {
    background-color: ${colors.lightBlue};
    color: ${colors.darkGray};
    h3 {
      color: ${colors.darkPink};
    }
    button {
      color: ${colors.darkGreen};
      background-color: ${colors.lightGreen};
      &:active {
        outline: none;
      }
    }
  }
  body.dark {
    background-color: ${colors.darkBlue}
    color: ${colors.offwhite}
    h3 {
      color: ${colors.lightPink}
    }
    path {
      fill: ${colors.offwhite}
    }
    button {
      color: ${colors.lightGreen};
      background-color: ${colors.darkGreen};
      &:active {
        outline: none;
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
`;

export default GlobalStyle;