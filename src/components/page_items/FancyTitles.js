import React from "react"
import "../../styles/titles.scss"

const titles = {
  about_me: (
    <div className="fancy_titles">
      <div className="about_me_button">
        <p id="clicky">About Me</p>
      </div>
    </div>
  ),
  contact_me: (
    <div className="fancy_titles">
      <ContactMeButton />
    </div>
  ),
  project: (
    <div className="fancy_titles">
      <div className="project_button">
        <div className="bounding">
          <div className="bouncing">
            <p>Projects</p>
            {[...Array(11).keys()].map((index) => {
              return <div className="bubble" key={`bubble_${index}`} />
            })}
          </div>
        </div>
      </div>
    </div>
  ),
  clubs: (
    <div className="fancy_titles">
      <div className="ripple">
        <p>Clubs</p>
      </div>
    </div>
  ),
  non_technical: (
    <div className="fancy_titles">
      <div className="dash_container">
        <div className="speedy">
          <p>Non-Technical</p>
        </div>
        {[...Array(11).keys()].map((index) => {
          return <div className="line" key={`line_${index}`} />
        })}
      </div>
    </div>
  ),
  Experience: (
    <div className="fancy_titles">
      <div className="rotation_container">
        <div className="rotated" />
        <div className="stationary">
          <p>Experience</p>
        </div>
      </div>
    </div>
  ),
  Research: (
    <div className="fancy_titles">
      <div className="book-container">
        <p>Research</p>
        <div className="book">
          <div className="book__page" />
        </div>
      </div>
    </div>
  ),
  TA: (
    <div className="fancy_titles">
      <TaButton />
    </div>
  ),
}

function TaButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50mm"
      height="31mm"
      version="1.1"
      viewBox="0 0 86 62"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow
            dx="4"
            dy="3"
            stdDeviation="0"
            floodColor="#b71566"
            floodOpacity="1"
          />
        </filter>
      </defs>
      <path
        fill="#e51a80"
        d="M36.212 48.403c-9.745 2.615-19.252 9.032-26.501 3.447C2.46 46.264-2.53 28.676.679 21.07c3.209-7.606 14.617-5.23 28.997-7.487 14.38-2.259 31.73-9.151 43.14-7.487C84.224 7.76 89.69 17.98 87.551 26.418c-2.14 8.437-11.884 15.092-21.748 17.826-9.864 2.733-19.846 1.545-29.592 4.16z"
        filter="url(#shadow)"
        id="bottom_morphy"
      ></path>
      <path
        fill="#24305e"
        d="M36 46.152c-8.6 2.307-16.99 7.97-23.387 3.041-6.397-4.929-10.801-20.45-7.97-27.162 2.832-6.712 12.9-4.614 25.59-6.607 12.69-1.993 28-8.075 38.068-6.607 10.068 1.469 14.892 10.488 13.004 17.934-1.888 7.445-10.487 13.318-19.192 15.73C53.41 44.893 44.6 43.845 36 46.151z"
        id="top_morphy"
      ></path>
      <text x="29.386" y="36.78">
        <tspan x="34" y="38" strokeWidth="0.529">
          TA
        </tspan>
      </text>
    </svg>
  )
}

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

export default titles
