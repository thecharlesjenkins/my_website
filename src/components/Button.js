import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
  font-size: 13;
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
`

export default ({ href, children }) => {
  return <a href={href}><Button>{children}</Button></a>
}
