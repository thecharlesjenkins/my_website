import React, { useEffect } from "react"
import SectionTitle from "./SectionTitle"
import "../styles/titles.scss"

const Topic = (props) => {
  useEffect(() => {
    console.log("topic", props.transitionStatus)
  }, [props.transitionStatus])

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <props.Animation />
      </div>
      <div>
        {props.children}
      </div>
    </>
  )
}

export default Topic
