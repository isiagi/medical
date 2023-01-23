import React from 'react';

import styles from '../styles/Header.module.css';

function Header({ first, middle, last }) {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__wrapper}>
        <p style={{ color: '#0067DA' }}>{first}</p>
        <h2>{middle}</h2>
        <p className={styles.header__paragraph}>{last}</p>
      </div>
    </div>
  );
}

export default Header;
