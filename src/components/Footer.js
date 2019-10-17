import React from "react"
import SocialMediaContainer from "./SocialMediaContainer";
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;

export default () => {
    return(
        <FooterContainer>
            <SocialMediaContainer fixed={false}/>
            <h5 style={{paddingTop:"15px"}}>Created by Charles Jenkins</h5>
        </FooterContainer>
    )
}