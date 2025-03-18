import React from 'react'
import DeveloperPropertyListPage from './DeveloperProjectListPage';

function page({params}) {
    const {developer} = params;
  return <DeveloperPropertyListPage slug={developer}/>
}

export default page