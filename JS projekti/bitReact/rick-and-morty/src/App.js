import { useState } from "react";
import AllCharacters from "./pages/AllCharacters";
import SingleCharacters from "./pages/SingleCharacters";
import "./app.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isOnHomePage, setIsOnHomePage] = useState(true)
  const [data, setData]= useState([])
  
  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then((res) => res.json())
    .then((res) => setData(res.results));
  }
  console.log(data)
  return (

    <div className="App"> 
    <Header />
      <button onClick={()=>{
        fetchData()}}>FETCH DATA
      </button>

      <button onClick={()=>{
        setIsOnHomePage(!isOnHomePage);
      }}>Switch State</button>
      {isOnHomePage ? <AllCharacters data={data} /> : <SingleCharacters />}
      <Footer />
    </div>
  );
}

export default App;
 