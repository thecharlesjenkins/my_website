import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Topic from "../components/Topic"
import "../styles/titles.scss"
import BasicPageQuery from "../components/BasicPageQuery"
import gsap from "gsap"

const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
  padding: 1.25rem 1.75rem;
`

const Animation = React.forwardRef((props, ref) => {
  return (
    <div className="fancy_titles" {...props} ref={ref}>
      <ContactMeButton />
    </div>
  )
});

const exitAnimation = (animationRef, pageRef) => {
  let timeline = gsap.timeline()
  timeline.to(animationRef, {x: "100vw", duration: 1})
  timeline.to(pageRef, {x: "100vw", duration: 1}, ">.5")
  return timeline
}

const Contact = ({ data, transitionStatus }) => {
  return (
    <Topic
      data={data}
      transitionStatus={transitionStatus}
      Animation={Animation}
      exitAnimation={exitAnimation}
    >
      <BasicPageQuery data={data} />
      <a
        href="mailto:thecharlesjenkins@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Email me</Button>
      </a>
    </Topic>
  )
}

export default Contact

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

function ContactMeButton(props) {
  return (
    <svg
      width="80mm"
      height="80mm"
      viewBox="0 0 158 143"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        className="prefix__shadow_shadow"
        cx={88.524}
        cy={102.258}
        r={33.815}
        fill="#b71566"
      >
        <animate
          attributeName="r"
          values="33;38;33"
          dur="2.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        className="prefix__shadow_shadow"
        cx={106}
        cy={52.5}
        r={46}
        fill="#b71566"
      >
        <animate
          attributeName="r"
          values="46;50;46"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        className="prefix__shadow_shadow"
        cx={69}
        cy={105}
        r={27}
        fill="#b71566"
      >
        <animate
          attributeName="r"
          values="27;36;27"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <g>
        <circle
          className="prefix__shadow"
          cx={31}
          cy={36.5}
          r={23}
          fill="#e51a80"
        >
          <animate
            attributeName="r"
            values="23;26;23"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={57.364} cy={45.336} r={25.68} fill="#e51a80" />
        <circle
          className="prefix__shadow"
          cx={41}
          cy={71}
          r={30.5}
          fill="#e51a80"
        >
          <animate
            attributeName="r"
            values="30.5;33;30.5"
            dur="2.3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          className="prefix__shadow"
          cx={84.5}
          cy={92}
          r={29}
          fill="#e51a80"
        >
          <animate
            attributeName="r"
            values="29;33;29"
            keyTimes="0; 0.6; 1"
            dur="2.3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={99.897} cy={49.348} r={39.323} fill="#e51a80" />
        <circle cx={67.796} cy={94.288} r={23.273} fill="#e51a80" />
      </g>
      <g style={{ cursor: "pointer" }}>
        <circle cx={39} cy={44} r={18} fill="#24305e">
          <animate
            attributeName="r"
            values="18;22;18"
            keyTimes="0; 0.4; 1"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={60.135} cy={51.126} r={20.136} fill="#24305e" />
        <circle cx={47.551} cy={71.262} r={23.911} fill="#24305e" />
        <circle cx={81.529} cy={87.622} r={22.653} fill="#24305e" />
        <circle cx={93.5} cy={54} r={31} fill="#24305e">
          <animate
            attributeName="r"
            values="31;33;31"
            keyTimes="0; 0.65; 1"
            dur="3.1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={68.315} cy={89.509} r={18.248} fill="#24305e" />
        <text x={35} y={60}>
          <tspan dx={0} dy={0}>
            {"Contact"}
          </tspan>
          <tspan dx={-50} dy={20}>
            {"Me"}
          </tspan>
        </text>
      </g>
    </svg>
  )
}
