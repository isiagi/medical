import Link from 'next/link';
import React from 'react';

import styles from '../styles/Contact.module.css';

function Mini({ head, sub }) {
  return (
    <div className={styles.about__head}>
      <p style={{ fontSize: '1.7rem' }}>{head}</p>
      <div className={styles.about__item}>
        <p><Link href={"/"}>Home</Link> / {sub}</p>
      </div>
    </div>
  );
}

export default Mini;
