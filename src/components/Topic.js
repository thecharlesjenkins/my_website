import React, { useEffect, useRef, useState } from "react"
import "../styles/titles.scss"

const Topic = (props) => {
  let topicRef = useRef(null)
  let animationRef = useRef(null)
  let bodyRef = useRef(null)
  useEffect(() => {
    if (props.transitionStatus === "entering") {
      if (props.enterAnimation) {
        props.enterAnimation(
          animationRef.current,
          bodyRef.current,
          topicRef.current
        )
      }
    }
    if (props.transitionStatus === "exiting") {
      if (props.exitAnimation) {
        props.exitAnimation(
          animationRef.current,
          bodyRef.current,
          topicRef.current
        )
      }
    }
  }, [props])

  const isMobile = (width) => width <= 800

  const [mobileWidth, setMobileWidth] = useState(false)

  useEffect(() => {
    const resizeEvent = () => {
      setMobileWidth(isMobile(window.innerWidth))
    }

    window.addEventListener("resize", resizeEvent)
    resizeEvent()

    // cleanup this component
    return () => {
      window.removeEventListener("resize", resizeEvent)
    }
  }, [])

  return (
    <div style={{ overflow: "hidden" }}>
      <div ref={topicRef} style={{ ...props.starting }}>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            transform: `scale(${mobileWidth && props.mobileShrink})`,
          }}
        >
          {'Animation' in props &&
           <props.Animation ref={animationRef} />}
        </div>
        <div ref={bodyRef}>{props.children}</div>
      </div>
    </div>
  )
}

export default Topic
