import React, { useEffect, useRef } from "react"
import ClimbingSvg, { useAnimationRefs } from "./climbingsvg"

const ClimbingAnimation = (props) => {
  const svgRef = useRef(null)
  const ref = {
    intersection: svgRef,
  }

  const animationRefs = useAnimationRefs()

  Object.entries(animationRefs).forEach((entry) => {
    const [key, value] = entry
    ref[key] = value[0]
  })

  useEffect(() => {
    const handleChange = (entry) => {
      Object.values(animationRefs).forEach((value) => {
        value[1](value[0], entry[0].intersectionRatio)
      })
    }

    let current = svgRef.current
    const observer = new IntersectionObserver(handleChange, {
      threshold: [...Array(100).keys()].map((i) => (i + 1) / 100),
    })
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [svgRef, animationRefs])

  return <ClimbingSvg {...props} ref={ref} />
}

export default ClimbingAnimation
