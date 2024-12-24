import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../context/appContext'
import { toast } from 'react-toastify';

function Header({mobileNav, toggleNav}) {

  const { user, logoutUser } = useApp()
  const navigate = useNavigate()

  const [submenuOpen, setSubmenuOpen] = useState(false);

  function toggleSubmenu() {
    setSubmenuOpen((prev) => !prev);
  }


  async function logout(e){
    e.preventDefault()
    toggleNav();
    await logoutUser();
    toast.success("Logout successful")
    navigate('.')
  }


  return (
    <div>
        <nav>

            <div className='nav-logo'>
                <h1 className='logo'>Terapeuta</h1>
                <p>...your therapist</p>
            </div>


            <div className='bars-con'>
              <a className='menu' onClick={toggleNav}>{ mobileNav ? 
                <FontAwesomeIcon className='bars close-bar' icon={faXmark} size='lg' /> : 
                <FontAwesomeIcon className='bars open-bar' icon={faBars} size='lg' />}
              </a>

              <div className='nav-items' id={mobileNav ? 'collapsible' : ''}>

                <NavLink 
               to="."
               onClick={toggleNav} 
               className='navLink homepage'>
                Home
                </NavLink>

                {
                user !== null
                &&
                <NavLink 
               to="profile"
               onClick={toggleNav} 
               className='navLink user-in'>
                Dashboard
                </NavLink>}

               {
                user !== null
                &&
                <NavLink 
               to="booking"
               onClick={toggleNav} 
               className='navLink user-in'>
                Book a session
                </NavLink>}

                {
                user === null
                &&
                <NavLink 
               to="about"
               onClick={toggleNav} 
               className='navLink user-out'>
                About Us
                </NavLink>}

              <div className="navLink submenu-container">
                <a onClick={toggleSubmenu} className="submenu-trigger">
                  AI Therapist { submenuOpen ? '▲' : '▼'}
                </a>
                {submenuOpen && (
                  <div className="submenu">
                    <NavLink to="cbtchat" onClick={toggleNav} className="submenu-item">
                      C.B.T Chat
                    </NavLink>
                    <NavLink to="mindchat" onClick={toggleNav} className="submenu-item">
                      Mindfulness Chat
                    </NavLink>
                    <NavLink to="careerchat" onClick={toggleNav} className="submenu-item">
                      Career & Life
                    </NavLink>
                  </div>
                )}
              </div>

               {
                user === null
                &&
                <NavLink 
               to="login"
               onClick={toggleNav} 
               className='navLink user-out'>
                Login
                </NavLink>}
                
        
               {
                user !== null
                &&
                <Link 
               onClick={logout}
               className='navLink user-in'>
                <FontAwesomeIcon  icon={faRightFromBracket} size='1x'/>
               </Link>}
   
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Header;