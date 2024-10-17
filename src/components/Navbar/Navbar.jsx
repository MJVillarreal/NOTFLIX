import React from 'react'

import './Navbar.css'

import logo from '../../assets/netflix-logo.svg'
import search_icon from '../../assets/search-icon.svg'
import bell_icon from '../../assets/bell-icon.svg'
import profile_picture from '../../assets/profile-picture.png'
import dropdown_icon from '../../assets/dropdown.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarLeft">
        <img src={logo} alt="Logo"/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbarRight">
        <img src={search_icon} alt='' className='icon'/>
        <p>Children</p>
        <img src={bell_icon} alt='' className='icon'/>
        <div className="navbarProfile">
          <img src={profile_picture} alt='' className='profile'/>
          <img src={dropdown_icon} alt=''/>
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar