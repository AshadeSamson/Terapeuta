import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/pagination.module.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handlePaginate(e, number) {
    e.preventDefault();
    paginate(number);
  }

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles['page-item']}>
            <Link
              href="#!"
              onClick={(e) => handlePaginate(e, number)}
              className={styles['page-link']}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
