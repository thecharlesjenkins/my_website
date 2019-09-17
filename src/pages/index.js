import React from "react"
import Resume from "../components/resume"
import { allItems } from "../utils/items.js"

export default () => (
  <div style={{ maxWidth: "75vw", margin: "3rem auto" }}>
    <h1>
      <a
        href="https://www.linkedin.com/in/charles--jenkins/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Charles Jenkins
      </a>
    </h1>
    <h4>
      <a
        href="https://github.com/BestCharlemagne"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Github!
      </a>
    </h4>
    <h4>
      <a
        href="mailto:thecharlesjenkins@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me: thecharlesjenkins@gmail.com
      </a>
    </h4>
    <Resume items={allItems}></Resume>
  </div>
)
