import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Slider from './components/Slider/Slider'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities'
import CityDetails from './pages/CityDetails/CityDetails'

function App() {

  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/seeallcities"} element={<SeeAllCities />} />
          <Route path={"/citydetails/:cityId"} element={<CityDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  )
}

export default App
