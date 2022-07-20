import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Botao from './Components/Botao/Botao';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

      </BrowserRouter>    
    </div>
  )
}

export default App
