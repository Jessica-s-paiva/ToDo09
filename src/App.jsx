import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Routes} from '../src/Pages/Routes/Routes';
// import {BrowserRouter, Router} from 'react-router-dom';
import Header from './Components/Header/Header';
// import Botao from './Components/Botao/Botao';
import Main from './Pages/Main/Main';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  )
}

export default App
