import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/appContext';
import { toast } from 'react-toastify';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../assets/styles/header.module.css';

function Header({ mobileNav, toggleNav }) {
  const { user, logoutUser } = useApp();
  const navigate = useNavigate();

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
    <nav className={styles.mainHeader}>
      <div className={styles.navContent}>
        <div className={styles.navLogo}>
          <Link className={styles.logoLink} to=".">
            <h1 className={styles.logo}>Terapeuta</h1>
            <p>...your therapist</p>
          </Link>
        </div>

        <div className={styles.barsCon}>
          <button className={styles.menu} onClick={toggleNav}>
            {mobileNav ? (
              <FontAwesomeIcon className={`${styles.bars} closeBar`} icon={faXmark} size="lg" />
            ) : (
              <FontAwesomeIcon className={`${styles.bars} openBar`} icon={faBars} size="lg" />
            )}
          </button>

          <div className={`${styles.navItems} ${mobileNav ? styles.mobileOpen : ''}`}>
            <ScrollLink
              className={styles.navLink}
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
              className={styles.navLink}
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
              <NavLink to="profile" onClick={toggleNav} className={styles.navLink}>
                Dashboard
              </NavLink>
            )}

            {user !== null && (
              <NavLink to="booking" onClick={toggleNav} className={styles.navLink}>
                Book a session
              </NavLink>
            )}

            {user === null && (
              <NavLink to="about" onClick={toggleNav} className={styles.navLink}>
                About Us
              </NavLink>
            )}

            <NavLink to="cbtchat" onClick={toggleNav} className={styles.navLink}>
              AI Therapist
            </NavLink>

            {user === null && (
              <NavLink to="login" onClick={toggleNav} className={`${styles.navLink} ${styles.btnNavLink}`}>
                Get Started
              </NavLink>
            )}

            {user !== null && (
              <Link onClick={logout} className={styles.navLink}>
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
