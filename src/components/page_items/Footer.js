import React from "react"
import SocialMediaContainer from "../SocialMediaContainer"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 0 0;
  text-align: center;
  height: auto;
  min-height: 70px;
  flex-shrink: 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer fixed={false} />
      <h5 style={{ paddingTop: "10px" }}>Created by Charles Jenkins</h5>
    </FooterContainer>
  )
}

export default Footer;
