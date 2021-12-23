import React from "react"
import { Link } from "gatsby"

function BlogPost({pageContext}) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{pageContext.title}</h1>
          <em>{pageContext.date}</em>
        <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
      </main>
    </div>
  )
}

export default BlogPost
