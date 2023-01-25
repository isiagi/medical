import React from 'react';

import styles from '/home/geofrey/Desktop/clinic/styles/Contact.module.css';

function Mini({ head, sub }) {
  return (
    <div className={styles.about__head}>
      <p style={{ fontSize: '1.7rem' }}>{head}</p>
      <div className={styles.about__item}>
        <p>Home / {sub}</p>
      </div>
    </div>
  );
}

export default Mini;
