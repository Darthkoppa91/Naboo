import { useState } from "react";
import AllCharacters from "./pages/AllCharacters";
import SingleCharacters from "./pages/SingleCharacters";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  // pocetna vrednost mora biti bilo koja falsu vrednost da se ne bi pozivalo na useEffect }
  const [selectedChar, setSelectedChar] = useState(null);
  const [page, setPage] = useState(1)

  
  const fetchData = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.results));
  };
  const goToNextPage = () => {

    setPage(page+1);

  };
  

  useEffect(()=>{
    fetchData();
  }, [page])
// dependency array se mora dodati ako ne zelimo da se funkcija useEffect non stop renderuje!!!}
 
  return (
    <div className="App">
      <Header setSelectedChar={setSelectedChar} />
     
      {!selectedChar? <AllCharacters goToNextPage={goToNextPage} setSelectedChar={setSelectedChar} 
      data={data} /> :
       <SingleCharacters selectedChar={selectedChar} />}
      <Footer />
    </div>
  );
}

export default App;
