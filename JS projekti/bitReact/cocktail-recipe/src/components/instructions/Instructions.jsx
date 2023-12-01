import React from 'react'

function Instructions({text}) {
  return (
    <div style={{border:"1px black solid",backgroundColor
    :"silver"}}>
    <h2>Nacin pripreme</h2>
        <p>{text}</p>
    </div>
  )
}

export default Instructions;