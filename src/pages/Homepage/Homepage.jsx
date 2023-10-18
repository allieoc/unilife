import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Slider from '../../components/Slider/Slider'

function Homepage() {

  const scrollToTop = () => {
    scrollTo({top: 0, behavior: "smooth"})
  }


  //display cities when page loads
  // useEffect(()=>{
  //   axios.get()
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err))
  // })


  return (
    <div className='homepage-container'>
      <Slider page='home'/> 
      <form className="slider-form">
            <select className="cities">
                <option className="cities-dropdown" value="">Search by city</option>
            </select>
            <button className="find-homes-btn">Find Homes</button>
        </form>
      <h3>Student accommodations in our top cities</h3>
      <div className="cities-container">
        {/* CITIES GO HERE */}
        
      </div>
      <Link to="/seeallcities" className="see-all-btn">See All Cities</Link>
      <div className="compare-container">
        <h3>Compare all inclusive student homes.</h3>
          <div className="compare-section search">
            <img src="../src/assets/search.svg" />
            <h4>Search</h4>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="compare-section compare">
            <img src="../src/assets/checklist.svg" />
            <h4>Compare</h4>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="compare-section bills">
            <img src="../src/assets/receipt.svg" />
            <h4>Bills Included</h4>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
      </div>
      <div className="search-compare-container">
        <div className="search-compare-text">
          <div className="best-selection">
            <img src="../src/assets/hand-house.svg" />
            <div className="best-selection-text">
              <h4>Best Selection</h4>
              <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
            </div>
          </div>
          <div className="best-selection">
            <img src="../src/assets/heart.svg" />
            <div className="best-selection-text">
              <h4>Your favorite</h4>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
              <button onClick={scrollToTop} className="search-compare-btn">Search & Compare</button>
            </div>
          </div>
          
        </div>
        <div className="search-compare-img">
          <img src="../src/assets/guy.svg" />
        </div>
      </div>
    </div>
  )
}

export default Homepage