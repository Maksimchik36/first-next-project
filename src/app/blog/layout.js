import React from 'react'

const BlogLayout = ({children}) => {
  return (
      <div>
          <h1>Hi, this is blog's layout</h1>
                    {children}

      </div>
  )
}

export default BlogLayout