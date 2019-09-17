import React from "react"
export default ({ item_title, item_description }) => (
  <div style={{ margin: `3rem auto`, maxWidth: "75vw", padding: `0 1rem` }}>
    <h3><u>{item_title}</u></h3>
    <div>{item_description}</div>
  </div>
)