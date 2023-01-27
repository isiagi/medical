import Image from 'next/image';
import React from 'react';
import styles from '../styles/Who.module.css';
import Ban from './Ban';

function Who() {
  return (
    <div className={styles.who__container}>
      <div className={styles.who__wrapper}>
        <div className={styles.who__section}>
          <div>
            <h2
              style={{
                textAlign: 'center',
                color: '#0067DA',
                marginBottom: '1rem',
              }}
            >
              Who We Are
            </h2>
            <Ban />
          </div>
          <div className={styles.who__img}>
            <Image
              src={'/assets/who.jpg'}
              alt={'hf'}
              layout="fill"
              objectFit="cover"
              className={styles.who__img1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
