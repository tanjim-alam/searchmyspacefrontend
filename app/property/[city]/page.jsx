import React from 'react'
import CityPropertyListPage from './CityPropertyListPage'

function page({params}) {
    const {city} = params;
  return <CityPropertyListPage slug={city}/>
}

export default page