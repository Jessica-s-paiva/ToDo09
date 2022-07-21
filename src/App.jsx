import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import SeusProdutos from './Pages/SeusProdutos/SeusProdutos';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/SeusProdutos' element={<SeusProdutos />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
