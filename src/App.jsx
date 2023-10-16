import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Slider from './components/Slider/Slider'

function App() {

  return (
    
      <BrowserRouter>
        <Header />
        <Slider />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
