import React, {useState} from  "react"


export const Counter = ({startValue=0,max}) => {
    //  moze i max da se deklarise = 9999
    const [value, setValue] = useState(startValue)
    console.log(value)
    const increase = () =>{
    if(value <max){
            setValue(value +1)
        }}

    const decrease = () =>{
        if(value >0){
            setValue(value-1)
        }
    //     if (value ===0){
    //     return
    //     } else {
    //         setValue(value -1)
    //     }
       }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={decrease}>-</button>

        <button onClick={increase}>+</button>
        </div>
  )
}

