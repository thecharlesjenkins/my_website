import React, { useEffect, useRef } from "react"
import "../styles/titles.scss"

const Topic = (props) => {
  let topicRef = useRef(null)
  let animationRef = useRef(null)
  useEffect(() => {
    if (props.transitionStatus === "entering") {
      console.log("topic", props.transitionStatus)
      if (props.enterAnimation) {
        props.enterAnimation(animationRef.current, topicRef.current)
      }
    }
    if (props.transitionStatus === "exiting") {
      console.log("topic", props.transitionStatus)
      if (props.exitAnimation) {
        props.exitAnimation(animationRef.current, topicRef.current)
      }
    }
  }, [props])

  return (
    <div ref={topicRef}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <props.Animation ref={animationRef} />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default Topic
