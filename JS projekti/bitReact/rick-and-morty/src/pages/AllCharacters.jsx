import React from 'react'
import { Card } from '../components/Card'

function AllCharacters({data}) {
  console.log("DATA =>", data)
  return (
    <div className='all-characters'>
      {data.map((character)=>
        <Card character={character} />
      )}
    </div>
  )
}

export default AllCharacters