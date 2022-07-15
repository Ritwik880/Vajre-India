import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FiYoutube } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="childDiv">
                        <div className="left">
                            <img src="/logo.png" alt="logo" />
                            <h3>Follow us</h3>
                            <div className="icons">
                                <a className='childIcons' href="#"> <AiOutlineInstagram /></a>
                                <a className='childIcons' href="#"> <AiOutlineFacebook /></a>
                                <a className='childIcons' href="#">  <AiOutlineLinkedin /></a>
                                <a className='childIcons' href="#">  <FiYoutube /></a>
                            </div>

                        </div>
                        <div className="middle">
                            <h3>Contact</h3>
                            <ul>
                                <li className='footerLists'>
                                    <a href="#"><IoCallOutline/>+91 8521002864,  7781937988</a>
                                </li>
                                <li className='footerLists'>
                                    <a href="admin@vajreindiatechnologies.com"><AiOutlineMail/>admin@vajreindiatechnologies.com</a>
                                </li>
                                <li className='footerLists'>
                                    <a href="hr@vajreindiatechnologies.com">hr@vajreindiatechnologies.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <h3>Address</h3>
                            <p className='footerAdress'>Greater Noida Office
                                IIMT Incubation Center, Knowledge Park 3, Plot No. 20 A, Greater Noida, Uttar Pradesh, 201308</p>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer