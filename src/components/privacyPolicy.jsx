import React from 'react'
import privacyPolicy from '../utils/privacyPolicy.json'
import styles from '../assets/styles/policy.module.css'

function PrivacyPolicyContainer() {

  return (
    <div className={styles.bodyContainer}>
      {privacyPolicy.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          {/* Render section title */}
          {section.title && <h3 className={styles.sectionTitle}>{section.title}</h3>}

          {/* Render section content */}
          {section.content && <p className={styles.sectionContent}>{section.content}</p>}

            {/* Render section list */}
            {section.list && section.list.length > 0 &&           
            <ul className={styles.sectionList}>
                    {section.list.map((item, listIndex) => (
                      <li key={listIndex} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
            </ul>}

          {/* Render subsections if they exist */}
          {section.subsections &&
            section.subsections.length > 0 &&
            section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className={styles.subsection}>
                {/* Render subsection title */}
                {subsection.title && (
                  <h4 className={styles.subsectionTitle}>{subsection.title}</h4>
                )}

                {/* Render subsection content */}
                {subsection.content && (
                  <p className={styles.subsectionContent}>{subsection.content}</p>
                )}

                {/* Render subsection list if it exists */}
                {subsection.list && subsection.list.length > 0 && (
                  <ul className={styles.list}>
                    {subsection.list.map((item, listIndex) => (
                      <li key={listIndex} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default PrivacyPolicyContainer
