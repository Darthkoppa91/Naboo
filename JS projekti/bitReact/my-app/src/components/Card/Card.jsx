import React from 'react'
import "./card.css"

//primer destructiring na 2 nacina : A. direktno preko carda i B. tako sto const pa {ubacimo slika , ime }
// const Card = (props) => {
const Card = ({slika,ime, city, boja}) => {
    const styleObj = {
        color:boja,
        backgroundColor: "white"
    }

    // const {slika, ime} = props;
  return (

    <div className='card-div'>
        <img src={slika} alt=""/>

        <p style={styleObj}>{ime}</p>

        {/* <p style={{color:boja, backgroundColor:"silver"}}>{ime}</p> */}
        
        <p className={boja}>city:{city}</p>

    </div>
  )
}

export default Card