import { useState } from "react";
import "./app.css"
import Cocktails from "./components/cocktail/Cocktails";


function App() {
  const [input, setInput] = useState("")

  const [cocktailArray,setCocktailsArray] =useState([])

  function handleChange(event){
    setInput(event.target.value)
    
  }
  const getData = async function() {
    const res= await fetch("https://api.api-ninjas.com/v1/cocktail?name="+ input, {
      method: 'GET' ,
      headers: {
          'X-Api-Key':'2eZM2stlqk1XnB8PsLO4fA==72TKrrJwkRzrz4Ss'
      }
    })
    const cocktails= await res.json();
    setCocktailsArray(cocktails);
  }
  return (
    <div className="App"> 
    <h1>Unesi omiljeni koktel</h1> 
    <input type="text" placeholder="" onChange={handleChange} />
    <button onClick={() =>{
      getData(input)
    }}>Nadji recept</button>
    {/* {cocktailArray.map((drink) => {
      return (<Cocktails
            name = {drink.name}
            ingredients={ drink.ingredients}
            instructions={ drink.instructions }
            // {...drink}
      />)
    })} */}
    {cocktailArray.map((drink) => 
     <Cocktails
            name = {drink.name}
            ingredients={ drink.ingredients}
            instructions={ drink.instructions }
            // {...drink}
      />
    )}
    </div>
  );
}

export default App;
