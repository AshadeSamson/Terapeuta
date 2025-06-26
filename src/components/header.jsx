import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/appContext';
import { toast } from 'react-toastify';
import { Link as ScrollLink } from 'react-scroll';

function Header({ mobileNav, toggleNav }) {
  const { user, logoutUser } = useApp();
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  function toggleSubmenu() {
    setSubmenuOpen((prev) => !prev);
  }

  async function logout(e) {
    e.preventDefault();
    toggleNav();
    await logoutUser();
    toast.success("Logout successful");
    navigate('.');
  }

  function handleNavigation(sectionId) {
    return navigate('/', { state: { sectionId } });
  }

  return (
    <nav className="main-header">
      <div className="nav-content">
        <div className="nav-logo">
          <Link className="logo-link" to=".">
            <h1 className="logo">Terapeuta</h1>
            <p>...your therapist</p>
          </Link>
        </div>

        <div className="bars-con">
          <a className="menu" onClick={toggleNav}>
            {mobileNav ? (
              <FontAwesomeIcon className="bars close-bar" icon={faXmark} size="lg" />
            ) : (
              <FontAwesomeIcon className="bars open-bar" icon={faBars} size="lg" />
            )}
          </a>

          <div className={`nav-items ${mobileNav ? 'mobile-open' : ''}`}>
            <ScrollLink
              className="navLink"
              to="services"
              smooth={true}
              duration={500}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
                setTimeout(() => toggleNav(), 200);
              }}
            >
              Services
            </ScrollLink>

            <ScrollLink
              className="navLink"
              to="howItWorks"
              smooth={true}
              duration={500}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('howItWorks');
                setTimeout(() => toggleNav(), 200);
              }}
            >
              How It Works
            </ScrollLink>

            {user !== null && (
              <NavLink to="profile" onClick={toggleNav} className="navLink user-in">
                Dashboard
              </NavLink>
            )}

            {user !== null && (
              <NavLink to="booking" onClick={toggleNav} className="navLink user-in">
                Book a session
              </NavLink>
            )}

            {user === null && (
              <NavLink to="about" onClick={toggleNav} className="navLink user-out">
                About Us
              </NavLink>
            )}

            <NavLink to="cbtchat" onClick={toggleNav} className="navLink">
              AI Therapist
            </NavLink>

            {user === null && (
              <NavLink to="login" onClick={toggleNav} className="navLink btnNavLink">
                Get Started
              </NavLink>
            )}

            {user !== null && (
              <Link onClick={logout} className="navLink user-in">
                <FontAwesomeIcon icon={faRightFromBracket} size="1x" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
