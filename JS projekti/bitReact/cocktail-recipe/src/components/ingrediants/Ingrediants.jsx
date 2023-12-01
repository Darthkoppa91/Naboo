import React from 'react'

function Ingrediants({sastojci}) {
  return (
    <div>
        <h3> Sastojci</h3>
        {sastojci.map(e => <div><input type="checkbox"/> {e}</div>)}
    </div>
  )
}

export default Ingrediants;
 