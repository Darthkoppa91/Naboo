
import './App.css';
import { Counter } from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter startValue={5} max = {15} />
      <Counter />
      <Counter />
      <Counter />
      
    </div>
  );
}

export default App;
