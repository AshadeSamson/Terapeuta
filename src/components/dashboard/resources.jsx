import React, { useState, useEffect } from "react";
import { useApp } from "../../context/appContext";
import styles from "../../assets/styles/dashboard/resources.module.css";


function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("Books");
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getResources } = useApp()

  useEffect(() => {

    const fetchResources = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getResources(selectedCategory.toLowerCase())

        // Map the data into an array of resource objects
        const fetchedResources = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setResources(fetchedResources);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [selectedCategory]);

  return (
    <div className={styles.resources}>
      <h4>Helpful Resources</h4>

      {/* Category Buttons */}
      <div className={styles.categoryButtons}>
        <button
          className={`button ${selectedCategory === "Books" ? styles.active : ""}`}
          onClick={() => setSelectedCategory("Books")}
        >
          Books
        </button>
        <button
          className={`button ${selectedCategory === "Articles" ? styles.active : ""}`}
          onClick={() => setSelectedCategory("Articles")}
        >
          Articles
        </button>
      </div>

      {/* Display Resources */}
      <div className={styles.resourceList}>
        {loading ? (
          <p>Loading resources...</p>
        ) : resources.length > 0 ? (
          resources.map((resource) => (
            <div key={resource.id} className={styles.resourceItem}>
              <h3>{resource.title}</h3>
              <p className={styles.recommended}>Recommended for: {resource.therapyCategory}</p>
              <p className={styles.description}>{resource.description}</p>
              {selectedCategory === "Books" ? (
                <a href={resource.fileURL} target="_blank" download>
                  <button>Download</button>
                </a>
              ) : (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Read Article</button>
                </a>
              )}
            </div>
          ))
        ) : (
          <p>No resources available for this category at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
