import './App.css';
import { Header} from "./components/Header/Header"
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { useEffect, useState } from 'react';
function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])
  const fetchData = () => {
    fetch("https://api.tvmaze.com/shows").then((res) => 
      res.json()).then((data) => {setData(data.slice(0, 50))
      })
    
  };
  const filteredShows = data.filter
  ((show) => {
    return show.name.includes(input)})
useEffect(() => {fetchData()}, [])
console.log(data)
  return (
    <div className="App">
      <Header 
      setInput = {setInput} input = {input} />
      <Main shows={filteredShows}>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
