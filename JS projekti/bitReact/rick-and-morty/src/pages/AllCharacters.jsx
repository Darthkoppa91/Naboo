import React from 'react'
import { Card } from '../components/Card'
import Pagination from '../components/Pagination'

function AllCharacters({data, setSelectedChar, goToNextPage}) {
  console.log("DATA =>", data)
  return (
    <>
    <Pagination goToNextPage={goToNextPage} />

    <div className='all-characters'>
      
      {data.map((character)=>
        <Card setSelectedChar={setSelectedChar} character={character} />
      )}
     
    </div>
    </>
   
    

  )
}

export default AllCharacters