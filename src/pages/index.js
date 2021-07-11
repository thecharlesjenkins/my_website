import React, { useEffect } from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Index = ({ transitionStatus }) => {
  useEffect(() => {
    console.log("HomePage", transitionStatus)
  }, [transitionStatus])
  return (
    <>
      <div style={{ maxWidth: "75vw", margin: "4rem auto" }}>
        <h4>Hello, I am</h4>
        <h1>Charles Jenkins</h1>
        <h4 id="about">a software engineer</h4>
      </div>
    </>
  )
}

export default Index
