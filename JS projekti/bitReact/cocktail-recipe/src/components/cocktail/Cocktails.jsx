import React from 'react'
import Ingredients from '../ingrediants/Ingrediants';
import Instructions from '../instructions/Instructions';

function Cocktails({name,ingredients, instructions}) {



  return (
    <div>Cocktails
        <h2>{name}</h2>
        {/* <p>{ingredients}</p> */}
        <Ingredients sastojci={ingredients} />
        {/* <p>{instructions}</p> */}
        {/* <Instructions data={instructions} /> */}
        <Instructions instructions={instructions}  />
    </div>
  )
}

export default Cocktails;