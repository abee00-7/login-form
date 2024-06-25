import { useState } from 'react'
 
import './App.css'
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<LoginPage />} />
    
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
