import React, { useEffect, useState } from 'react'
import './SeeAllCities.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function SeeAllCities() {

  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  //https://unilife-server.herokuapp.com/cities

  //display cities when page loads
   useEffect(()=>{
     axios.get('https://unilife-server.herokuapp.com/cities?limit=20')
     .then((res) => 
     setCities(res.data.response))
     .catch((err) => console.log(err))
   })


  return (
    <div className="see-all-container">
        <Slider page='seeAllCities' />
        <h1 className="see-all-title">Search by City</h1>
        <div className="city-names-container">
          {
            cities.map((city)=>(
              <div className="city-names-card">
                <button onClick={() => navigate(`/citydetails/${city?._id}`)} key={city?._id}>{city?.name}</button>  
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default SeeAllCities