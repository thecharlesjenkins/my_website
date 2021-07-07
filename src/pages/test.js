import React from "react"
import titles from "../components/page_items/FancyTitles"
// import Navigation from "../components/page_items/Navigation"
// import "../styles/titles.scss"

const tabbed = ({ data }) => (
  <div style={{backgroundColor: "#24305E"}}>
      <div>
        {Object.keys(titles).map((key) => {
          return titles[key]
        })}
      </div>
  </div>
);

export default tabbed;