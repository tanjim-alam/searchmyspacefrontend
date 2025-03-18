import React from 'react'
import ProjectsListQueryPage from './ProjectsListQueryPage'

function page({params}) {
    const {query} = params
  return <ProjectsListQueryPage query={query}/>
}

export default page