import React from "react";
import { Link } from "react-router-dom";
import './CityCard.css'

function CityCard({name, count, imageURL, cityId}) {


return (
<Link to={`/citydetails/${cityId}`} className='city-card-container'>
    <div className='city-container' style={{ backgroundImage: `url(${imageURL})` }}>
    </div>
    <div className='city-info'>
        <h1 className='city-name'>{name}</h1>
        <p className='property-count'>{count} Properties</p>
    </div>
</Link>
)}

export default CityCard;