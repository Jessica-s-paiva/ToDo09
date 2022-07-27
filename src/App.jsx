import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import SeusProdutos from './Pages/SeusProdutos/SeusProdutos';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SeusProdutos' element={<SeusProdutos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
