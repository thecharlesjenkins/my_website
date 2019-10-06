import React from "react"
import ResumeItem from "../components/resume_item"
import ResumeList from "../components/resume_list"

export default ({ items }) => {
  const resumeItems = items.map(item => (
    <ResumeItem
      item_title={item[0]}
      item_description={<ResumeList items={item[1]}></ResumeList>}
    ></ResumeItem>
  ))
  return resumeItems
}
