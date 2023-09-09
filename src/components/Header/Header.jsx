import React from 'react'
import './Header.css'
import { MdOutlineHolidayVillage } from 'react-icons/md'
import { BsSuitHeart, BsEnvelope } from 'react-icons/bs'

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <MdOutlineHolidayVillage size={40}/>
            <img src='../src/assets/UniLife.svg' />
        </div>
        <div className='buttons-container'>
            <div className='shortlist'>
                <BsSuitHeart />
                <p>Shortlist</p>
            </div>
            <div className='contact'>
                <BsEnvelope />
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Header