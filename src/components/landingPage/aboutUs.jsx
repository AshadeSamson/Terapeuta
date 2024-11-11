import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/aboutUs.module.css'

function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false);

  
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec euismod, nisi eget consectetur vehicula, nisl felis lacinia nunc, 
  eget aliquam elit dolor ut libero. Vivamus a sem vel nulla placerat interdum. 
  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
  Integer aliquet, orci ac finibus vehicula, enim ligula pretium leo, a mollis erat turpis at sapien. 
  Maecenas sed facilisis risus, a auctor massa. Aenean ut metus turpis. Suspendisse potenti. 
  Fusce elementum imperdiet velit.`;

  
  const previewText = text.slice(0, 150);

  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.text}>
        {isExpanded ? text : `${previewText}...`}
      </p>
      <button className={styles.toggleButton} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

export default AboutUs