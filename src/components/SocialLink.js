import React from "react"
import IconGithub from "./icons/github"
import IconLinkedin from "./icons/linkedin"
import IconEmail from "./icons/email"
import styled from "styled-components"

const FormattedIcon = ({ size, title }) => {
  switch (title) {
    case "Github":
      return IconGithub({ size, title })
    case "LinkedIn":
      return IconLinkedin({ size, title })
    case "Email":
      return IconEmail({ size, title })
    default:
      return IconGithub
  }
}

const IconHolder = styled.div`
  padding: 5px;
`

const SocialLink = ({ link, social }) => {
  return (
    <IconHolder>
      <a className="no-underline"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        textDecoration="none"
      >
        <FormattedIcon title={social} size={35} />
      </a>
    </IconHolder>
  )
}

export default SocialLink;
