import React, { useEffect, useState } from 'react'
import './CityDetails.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CityDetails() {
  const [cityProperties, setCityProperties] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const {cityId} = useParams();

  useEffect(()=>{
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then((res) => 
      //console.log(res.data.response)
      setCityProperties(res.data.response)
      )
      .catch((err) => console.log(err))
    }, [])

  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
    .then((res) => 
    //console.log(res.data.data)
    setSelectedCity(res.data.data)
    )
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
        <Slider page='cityDetails' />
        <form className="homes-filter">
          <div className="filter-category">
            <label>Min Bedroom</label>
            <select>
              <option>Any Bedroom</option>
              <option>Studio</option>
              <option>1 Bed</option>
              <option>2 Beds</option>
              <option>3 Beds</option>
              <option>4 Beds</option>
              <option>5 Beds</option>
            </select>
          </div>
          <div className="filter-category">
            <label>Min Bathroom</label>
            <select>
              <option>Any Bathroom</option>
              <option>1 Bathroom</option>
              <option>2 Bathrooms</option>
              <option>3 Bathrooms</option>
            </select>
          </div>
          <div className="filter-category">
            <label>Max Price</label>
            <select>
              <option>Any Price</option>
              <option>£100</option>
              <option>£500</option>
              <option>£1000</option>
              <option>£2000</option>
              <option>£5000</option>
            </select>
          </div>  
          <div className="filter-category">
            <label>Home Type</label>
            <select>
              <option>Any Type</option>
              <option>Detached</option>
              <option>Semi-Detached</option>
              <option>Apartment</option>
            </select>
          </div>        
          
        </form>
        <div className="city-details-title">
          {
            selectedCity.map((city)=>(
              <h1 key={city._id}>{cityProperties.length} properties in {city.name}</h1>
            ))
          }
        </div>
        <div className="properties-container">
          {
            cityProperties.map((property) => (
              <div id="property-card" key={property._id}>
                <img className="property-img" src={property.images[0]} />
                <div className="property-primary-info">
                  <div className="property-price">
                    <h5>£{property.rent}</h5>
                    <p>pppw including bills</p>
                  </div>
                    <img className="bed-img" src="../../src/assets/bed.svg" />
                    <p>{property.bedroom_count}</p>
                    <img className="bathtub-img" src="../../src/assets/bathtub.svg" />
                    <p>{property.bathroom_count}</p>
                </div>
                <div className="property-secondary-info">
                  <div className="property-type">
                    <h6>{property.property_type}</h6>
                    <h6>{property.furnished}</h6>
                  </div>
                  <div className="property-address">
                    <img src="../../src/assets/home_pin.svg" />
                    <p>{property.address.street}, {property.address.city}, {property.address.postcode}</p>
                  </div>
                </div>
                <div className="property-view">
                  <img className="home-img" src="../../src/assets/home.svg" />
                  <button className="view-home">View Home</button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default CityDetails