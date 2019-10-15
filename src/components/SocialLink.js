import React from "react"
import IconGithub from "./icons/github"
import IconLinkedin from "./icons/linkedin"
import IconEmail from "./icons/email"

const FormattedIcon = ({ size, title }) => {
  switch (title) {
    case 'Github':
      return IconGithub({size, title});
    case 'LinkedIn':
      return IconLinkedin({size, title});
    case 'Email':
      return IconEmail({size, title});
    default:
      return IconGithub;
  }
};

export default ({ link, social }) => {
    return (
      <div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          textDecoration="none"
        >
          <FormattedIcon title={social} size={35}/>
        </a>
      </div>
    )
  }