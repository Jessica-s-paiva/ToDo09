import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      
      <Route>
        <Route path="/header" component={<Header />} />
      </Route>
      </BrowserRouter>    
    </div>
  )
}

export default App
