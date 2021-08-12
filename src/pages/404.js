import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
  padding: 1.25rem 1.75rem;
`

const TakeMeBack = styled.div`
  padding-top: 4rem;
  text-align: center;
`

const errorPage = () => (
  <TakeMeBack>
    <h1>404</h1>
    <h4>It looks like you got lost.</h4>
    <h4>Let me help you out: </h4>
    <a href="/">
      <Button>Back to the 'Real World'</Button>
    </a>
  </TakeMeBack>
)

export default errorPage
