import React from 'react'


const BlogContext = React.createContext()


export const BlogProvider = ({ children }
) => {
  return <BlogContext.Provider value={123345676554313245}>
    {children}


  </BlogContext.Provider>
  
}


export default BlogContext
