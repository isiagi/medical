import Image from 'next/image';
import React from 'react';
import InputSection from '../components/InputSection';

import styles from '../styles/Home.module.css';
import Faq from './Faq';

const he = () => {
  return (
    <div className={styles.he__container}>
      <div className={styles.he__wrapper}>
        <div className={styles.he__heading}>
        <p style={{color: '#0067DA'}}>Important Questions</p>
          <h1 style={{color: 'rgb(17, 25, 67)'}}>Frequently Asked Questions</h1>
        </div>
        <div className={styles.he__section}>
          <InputSection />
          <div>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default he;
