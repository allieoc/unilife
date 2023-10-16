import React from 'react'
import './Slider.css'

function Slider() {
  return (
    <div className="slider-container">
        <img src="../src/assets/overlay.png" className="banner-img"/>
        <div className='banner-text'>
            <h1>Find student homes with bills included</h1>
            <p>A simple and faster way to search for student accommodation</p>
        </div>
        <form>
            <select name="cities">
                <option value="">Search by city</option>
            </select>
        </form>
    </div>
  )
}

export default Slider