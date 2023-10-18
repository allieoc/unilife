import React from 'react'
import './Slider.css'

function Slider({ page }) {

  let bannerText = null;

  switch (page) {
    case 'home':
      bannerText = (
        <div className='banner-text'>
          <h1>Find student homes with bills included</h1>
          <p>A simple and faster way to search for student accommodation</p>
        </div>
      );
      break;
    case 'cityDetails':
      bannerText = (
        <div className='banner-text'>
          <h1>Search Accommodation</h1>
          <p>Whatever you’re after, we can help you find the right student accommodation for you. </p>
        </div>
      );
      break;
    case 'seeAllCities':
      bannerText = (
        <div className='banner-text'>
          <h1>Student Accommodation</h1>
          <p>UniLife have student accommodation available across the UK.
Whatever you’re after, we can help you find the right student accommodation for you. </p>
        </div>
      );
      break;
    default:
      bannerText = null;
  }

  return (
    <div className='slider-container'>
    <img src='../src/assets/overlay.png' className='banner-img' />
    {bannerText}
  </div>
  );
}

export default Slider