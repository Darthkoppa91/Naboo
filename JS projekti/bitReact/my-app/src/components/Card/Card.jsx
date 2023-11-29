import React from 'react'
import "./card.css"

const Card = ({ime,slika, yop, km, cena, boja, model, sold, hide}) => {
        let soldString = "";
        let hideCar = '';
        if (sold=== true){
            soldString = "prodata"
        } else {
            soldString = "nije prodata"
        }
    
        if(hide === true) {
            hideCar="style-none" 
        }else { 
            hideCar="card-car"
        }

       return( 
       <div className={hideCar}>
            <p>ime:{ime}</p>
            <img src={slika} alt="" />
            <p>yop:{yop}</p>
            <p>km:{km}</p>
            <p>cena:{cena}</p>
            <p>boja:{boja}</p>
            <p>model:{model}</p>
            {/*ovo je primer ako zelimo iff statment kroz ternarni operator }
            {/* <p>{sold ? "JESTE PRODAT": "NIJE PRODAT"}</p> */}
            <p>{soldString}</p>
            <p>{hideCar}</p>
        </div>) 
}
export default Card

// //primer destructiring na 2 nacina : A. direktno preko carda i B. tako sto const pa {ubacimo slika , ime }
// // const Card = (props) => {
// const Card = ({slika,ime, city, boja}) => {
//     const styleObj = {
//         color:boja,
//         backgroundColor: "white"
//     }

//     // const {slika, ime} = props;
//   return (

//     <div className='card-div'>
//         <img src={slika} alt=""/>

//         <p style={styleObj}>{ime}</p>

//         {/* <p style={{color:boja, backgroundColor:"silver"}}>{ime}</p> */}
        
//         <p className={boja}>city:{city}</p>

//     </div>
//   )
// }

// export default Card