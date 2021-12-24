import React from "react"
import "../styles/blog.scss"

function BlogPost({pageContext}) {
  return (
    <div>
      <main>
        <h1>{pageContext.title}</h1>
        <em>{pageContext.date}</em>
        <hr></hr>
        <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
      </main>
    </div>
  )
}

export default BlogPost
