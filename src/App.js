import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <h1 className="title">My Counter</h1>
      <p className="counter">{counter}</p>
      <button className="btn increment" onClick={ () => setCounter(counter => counter + 1)}>Increment</button>
      <button className="btn decrement" onClick={ () => setCounter(counter => counter - 1)}>Decrement</button>
    </div>
  );
}

export default App;
