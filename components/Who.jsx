import Image from 'next/image';
import React from 'react';
import styles from '../styles/Who.module.css';
import Ban from './Ban';

import imgh from '../public/assets/who.jpg'

function Who() {
  return (
    <div className={styles.who__container}>
      <div className={styles.who__wrapper}>
        <div className={styles.who__section}>
          <div>
            <h1
              style={{
                textAlign: 'center',
                color: 'rgb(28, 28, 143)',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}
            >
              Who We Are
            </h1>
            <Ban />
          </div>
          <div className={styles.who__img}>
            <Image
              src={imgh}
              alt={'hf'}
              // layout="fill"
              // objectFit="cover"
              className={styles.who__img1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
