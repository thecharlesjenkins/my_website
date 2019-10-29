import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLink from "./SocialLink"
import styled from "styled-components"
import media from "../styles/media"

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const FixedContainer = styled.div`
        align-items: center;
        white-space: nowrap;
        width: 35px;
        position: fixed;
        bottom: 0px;
        left: 25px;
        ${media.tablet`display: none;`};
        
        &:after {
            content: '';
            display: block;
            height: 120px;
            width: 1px;
            background-color: gray
            border-radius: 25px;
            top: -5px;
            margin-left: 21.5px;
          }`

export default ({ fixed }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `)

  const socialItems = data.site.siteMetadata.social.map(({ name, url }, i) => (
    <SocialLink link={url} social={name} key={i} />
  ))

  return (
    <div>
      {fixed ? (
        <FixedContainer>{socialItems}</FixedContainer>
      ) : (
        <SocialContainer>{socialItems}</SocialContainer>
      )}
    </div>
  )
}
