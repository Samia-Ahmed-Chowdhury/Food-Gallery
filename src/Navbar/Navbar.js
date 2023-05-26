import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../images/log.png"
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CallIcon from '@mui/icons-material/Call';

function Navbar() {
  
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-5">
        <div className="container">
          <div className="logo">
            <NavLink  to="/" >
              <img src={logo} alt="logo" className="img-fluid" /></NavLink>
          </div>
          <button className="navbar-toggler" type="button" id="navbar-toggler">
            <label>
              <input className="toggle_btn" type="checkbox" id="toggle_btn" onClick={() => setShow(!show)} />
              <div className="toggle">
                <span className="top_line common"></span>
                <span className="mid_line common"></span>
                <span className="end_line common"></span>
              </div>
            </label>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link"  to="/">
                Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to="about">Our story</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recipe" >Recipe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {
          /* <!-- ---------mbl nav-------------- --> */

          show ? <div className="slide" id="slide">
            <ul className="navbar-nav  me-auto mb-lg-0 m-auto">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                <HomeIcon/>
                Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                <BookmarkAddIcon/>
                Our story</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recipe">
                <MenuBookIcon className='slide_icon'/>
                Recipe</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                <CallIcon className='slide_icon'/>
                Contact Us</NavLink>
              </li>
            </ul>
          </div>
            : null
        }
      </nav>

    </>
  )
}



export default Navbar