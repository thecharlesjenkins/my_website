import React from "react"
import Layout from "../components/Layout"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const second = ({ data }) => (
  <div>
    <Layout>
      
    </Layout>
  </div>
)

export default second