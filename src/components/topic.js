import React, { useEffect, useRef } from "react"
import "../styles/titles.scss"

const Topic = (props) => {
  let topicRef = useRef(null)
  let animationRef = useRef(null)
  let bodyRef = useRef(null)
  useEffect(() => {
    if (props.transitionStatus === "entering") {
      console.log("topic", props.transitionStatus)
      if (props.enterAnimation) {
        props.enterAnimation(animationRef.current, bodyRef.current, topicRef.current)
      }
    }
    if (props.transitionStatus === "exiting") {
      console.log("topic", props.transitionStatus)
      if (props.exitAnimation) {
        props.exitAnimation(animationRef.current, bodyRef.current, topicRef.current)
      }
    }
  }, [props])

  return (
    <div ref={topicRef} style={{...props.starting}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <props.Animation ref={animationRef} />
      </div>
      <div ref={bodyRef}>{props.children}</div>
    </div>
  )
}

export default Topic
