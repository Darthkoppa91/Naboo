import React from 'react'
import {Card} from '../Card/Card'
export const Main = ({fetchData, shows}) => {
  return (
    <main>
      {shows.map((show) => {
        return <Card img={show.image} name={show.name} rating={show.rating}/>
      })}
    </main>
  )
}
