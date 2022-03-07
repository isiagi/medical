import { useState } from 'react';
import { FaBrain } from 'react-icons/fa';

import styles from '../styles/Home.module.css';

const morez = [
  {
    name: 'hey',
    content: 'hello there',
  },
];

const Depart = () => {
  const [more, setMore] = useState();
  return (
    <>
      <h2 style={{ textAlign: 'center', fontSize:'2rem', marginTop: '40px'}}>Our Departments</h2>
      <p
        style={{ textAlign: 'center', maxWidth: '800px', margin: '2rem auto' }}
      >
        We work with government and non-government agencies, industry, legally
        registered companies, highly skilled individual consultants and academic
        institutions to accomplish our missions in the following strategic areas
      </p>
      <div className={styles.depart__container}>
        <div className={styles.depart__items}>
          <div className={styles.depart__item} onClick={() => setMore('hey')}>
            <FaBrain style={{color: 'teal', fontSize: '35px'}}/>
            <p>Biorisk management (Biosafety Biosecurity)</p>
          </div>
          <div className={styles.depart__item}>
            <FaBrain style={{color: 'teal', fontSize: '35px'}}/>
            <p>Total Quality management (TQM) </p>
          </div>
          <div className={styles.depart__item}>
            <FaBrain style={{color: 'teal', fontSize: '35px'}}/>
            <p>Supply of goods and services</p>
          </div>
        </div>
        <div>
          {morez.map((item) => {
            if (item.name === more) {
              return (
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.content}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Depart;
