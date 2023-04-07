import React ,{ useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function Header() {

  const [menu, setMenu] = useState(() => false);

  function toggleMenu(e){
    e.preventDefault();
    setMenu(menu => !menu);
  }


  return (
    <div>
        <nav>

            <div className='nav-logo'>
                <h1 className='logo'>Terapeuta</h1>
                <p>...your therapist</p>
            </div>

            <div className='bars-con'>
              <a className='menu' onClick={toggleMenu}>{ menu ? 
                <FontAwesomeIcon className='bars close-bar' icon={faXmark} size='lg' /> : 
                <FontAwesomeIcon className='bars open-bar' icon={faBars} size='lg' />}
              </a>

              <div className='nav-items' id={menu ? 'collapsible' : ''}>

               <NavLink 
               to="profile" 
               className='navLink user-in'>
                Book a session
                </NavLink>

               <NavLink 
               to="login" 
               className='navLink user-out'>
                Login
                </NavLink>

               <NavLink 
               to="signup" 
               className='navLink user-out'>
                SignUp
                </NavLink>
                
               <NavLink 
               to="." 
               className='navLink user-in'>
                Logout
               </NavLink>
   
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Header;