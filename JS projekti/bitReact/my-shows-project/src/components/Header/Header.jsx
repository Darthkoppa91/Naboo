import React from 'react'
import TextField from '@mui/material/TextField';    

export const Header = ({setInput, value}) => {
  return (
    <header>
      <h1>BIT Shows</h1>
      <TextField value = {value} onChange={(e) => {
        setInput(e.target.value)
      }} id="standard-basic" label="Standard" variant="standard" />
    </header>
  )
}
