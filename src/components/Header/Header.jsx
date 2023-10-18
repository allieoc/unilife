import React, {useState} from 'react'
import './Header.css'
import { MdOutlineHolidayVillage } from 'react-icons/md'
import { BsSuitHeart, BsEnvelope } from 'react-icons/bs'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "90%",
    },
    overlay:{
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  };


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

function Header() {
//create state to control modal
const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='header-container'>
        <Link to="/" className='logo-container'>
            <MdOutlineHolidayVillage size={40}/>
            <img src='../src/assets/UniLife.svg' />
        </Link>
        <div className='buttons-container'>
            <div className='shortlist'>
                <BsSuitHeart />
                <button>Shortlist</button>
            </div>
            <div className='contact'>
                <BsEnvelope />
                <button onClick={()=>setIsOpen(true)}>Contact Us</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={()=>setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Contact Us Modal"
                >
                    <div className="modal-header">
                        <div className="modal-header-text">
                            <h2>Contact Us</h2>
                            <p>Feel free to contact us if you have any questions.
    Looking forward to hear from you.</p>
                        </div>
                        <img src="../src/assets/post-office.svg" />
                    </div>
                    <form>
                        <div className="modal-left">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                            <br />
                            <label htmlFor="number">Phone Number</label>
                            <input type="number" id="number" placeholder="Enter your phone number"/>
                            <br />
                            <label htmlFor="are-you">Are you a...</label>
                            <select>
                                <option>Student</option>
                                <option>Faculty Member</option>
                                <option>Recent Graduate</option>
                            </select>
                        </div>
                        <div className="modal-right">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email address" />
                            <br />
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default Header