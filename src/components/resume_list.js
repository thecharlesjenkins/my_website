import React from "react"
export default ({ items }) => (
  <ul>
    {items.map(item => <li>{item}</li>)}
  </ul>
)
