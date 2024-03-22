import React ,{ useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userAuth } from './contexts/authContext';

function Header({mobileNav, toggleNav}) {

  const { user, logoutUser } = userAuth()
  const navigate = useNavigate()


  async function logout(e){
    e.preventDefault()
    toggleNav();
    await logoutUser();
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
                About
                </NavLink>}

                {
                user === null
                &&
                <NavLink 
               to="features"
               onClick={toggleNav} 
               className='navLink user-out'>
                Features
                </NavLink>}

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
                user === null
                &&
                <NavLink 
               to="signup"
               onClick={toggleNav} 
               className='navLink user-out'>
                SignUp
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