import React, { useEffect, useRef } from "react"
import "../styles/titles.scss"
import gsap from "gsap"

const Topic = (props) => {
  let topicRef = useRef(null)
  useEffect(() => {
    gsap.to(topicRef.current, {
      autoAlpha: 1,
      duration: 1,
    })
  }, []) //THIS IS RUN THE FIRST TIME THE SITE IS OPENED

  useEffect(() => {
    if (props.transitionStatus === "entering") {
      console.log("topic", props.transitionStatus)
      gsap.to(topicRef.current, {
        autoAlpha: 1,
        duration: 1,
      })
    }
    if (props.transitionStatus === "exiting") {
      console.log("topic", props.transitionStatus)
      gsap.to(topicRef.current, { autoAlpha: 0, duration: 1 })
    }
  }, [props.transitionStatus])

  return (
    <div ref={topicRef}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <props.Animation />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default Topic
