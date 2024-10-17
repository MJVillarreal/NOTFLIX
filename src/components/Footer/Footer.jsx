import React from 'react'

import './Footer.css'

import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/Instagram.svg'
import x from '../../assets/x.svg'
import facebook from '../../assets/facebook.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={x}/>
        <img src={youtube}/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Realations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer