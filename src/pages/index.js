import React from "react"
import Resume from "../components/resume"
import {allItems} from "../utils/items.js"

export default () => (
  <div style={{ maxWidth: "75vw", margin: "3rem auto" }}>
    <h1>Charles Jenkins</h1>
    <Resume items={allItems}></Resume>
  </div>
)
