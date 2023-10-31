import React, { useState } from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai'
import axios from 'axios';

function Footer() {

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState({message: '', color: ''})

    const handleSignup = (e) => {
        e.preventDefault();
        if(isValidEmail(email)){
            postEmail()
        } else {
            setEmailMessage({message: "Email is invalid. Please enter another email address.", color: 'white'})
        }
        postEmail();
    }

    function isValidEmail(email) {
        // Regular expression for validating an Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const postEmail = () => {
        axios.post('https://unilife-server.herokuapp.com/subscriptions', { email: email })
        .then((res)=>{ 
            setEmailMessage({message: 'Thank you for subscribing to our newsletter!', color: 'white'})
            console.log(res);      
        })
        .catch(err=>{
            setEmailMessage({message: 'Sorry, something went wrong. Please try again.', color: 'white'})
            console.log(err)
        })
    }
    
   


  return (
    <div className='footer-container'>
        <div className="footer-blue">
            <div className="keep-in-touch">
                <h2>Keep in touch</h2>
                <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
                <form onSubmit={handleSignup} className="input-wrapper">
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Enter Email" 
                        name="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} 
                    />
                    <label htmlFor="email" className="email-label" style={{color: emailMessage.color}}>{emailMessage.message}</label>
                 </form>
                 
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
                <p>&copy;UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer