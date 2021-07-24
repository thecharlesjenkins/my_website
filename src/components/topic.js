import React, { useEffect, useRef } from "react"
import "../styles/titles.scss"
import gsap from "gsap"

const Topic = (props) => {
  let topicRef = useRef(null)
  let animationRef = useRef(null)
  useEffect(() => {
    if (props.transitionStatus === "entering") {
      console.log("topic", props.transitionStatus)
      gsap.to(topicRef.current, {
        autoAlpha: 0,
        duration: 0,
      })
      gsap.to(topicRef.current, {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1.5
      })
    }
    if (props.transitionStatus === "exiting") {
      console.log("topic", props.transitionStatus)
      if (props.exitAnimation) {
        props.exitAnimation(animationRef.current, topicRef.current)
      } else {
        gsap.to(topicRef.current, { autoAlpha: 0, duration: 1 })
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
        <props.Animation ref={animationRef}/>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default Topic
