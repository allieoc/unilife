import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-blue">
            <div className="keep-in-touch">
                <h2>Keep in touch</h2>
                <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
                <input type='text' placeholder='Your email' />
            </div>
            <div className="socialize">
                <h2>Let's Socialize</h2>
                <div className="facebook">
                    <BsFacebook size={20}/>
                    <p>Facebook</p>
                </div>
                <div className="twitter">
                    <AiFillTwitterCircle size={22}/>
                    <p>Twitter</p>    
                </div>   
                <div className="instagram">
                    <AiFillInstagram size={20}/>
                    <p>Instagram</p>    
                </div> 
            </div>
        </div>
        <div className="footer-black">
            <div className="footer-links">
                <p>About Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy & Cookie Policies</p>
            </div>
            <div className="footer-info">
                <p>2022</p>
                <p>UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer