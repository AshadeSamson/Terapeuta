import React from 'react'
import styles from '../assets/styles/footer.module.css'
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

function Footer() {

  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate('/', { state: { sectionId } }); 
  };


    return (
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.linksSection}>
              <h4>Quick Links</h4>
              <ul>
                <li><ScrollLink                 to="about"
                smooth={true}
                duration={500}
                onClick={() => handleNavigation('about')}>About Us</ScrollLink></li>
                <li><ScrollLink                 to="services"
                smooth={true}
                duration={500}
                onClick={() => handleNavigation('services')}>Services</ScrollLink></li>
                <li><ScrollLink                 to="faqs"
                smooth={true}
                duration={500}
                onClick={() => handleNavigation('faqs')}>FAQs</ScrollLink></li>
                <li><ScrollLink                 to="contact"
                smooth={true}
                duration={500}
                onClick={() => handleNavigation('contact')}>Contact Us</ScrollLink></li>
              </ul>
            </div>
    
            <div className={styles.contactSection}>
              <h4>Contact Us</h4>
              <p>Email: support@terapeuta.com</p>
              <p>Phone: +1 (718) 252-9311</p>
              <p>Address: 1408 Avenue J, Suite 101, Brooklyn, NY</p>
            </div>
    
            <div className={styles.socialSection}>
              <h4>Connect with Us</h4>
              <div className={styles.socialIcons}>
                <IconContext.Provider value={{size: "1.5rem"}}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /> </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </IconContext.Provider>
              </div>
            </div>
          </div>
    
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Terapeuta. All rights reserved.</p>
          </div>
        </footer>
      )
}

export default Footer