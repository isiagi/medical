import { BiFirstAid } from 'react-icons/bi';
import { ImLab } from 'react-icons/im';
import { GiNurseMale } from 'react-icons/gi';

import styles from '../styles/Banner1.module.css';

const Banner1 = () => {
  return (
    <div style={{padding:'0 2rem'}}>
    <hr></hr>
      <p style={{ fontSize: '22px' }}>
        Hitex consortium is a company limited by shares and by URSB legally
        registered established in 2021 in Uganda by a team of highly skilled
        technical experts in human health, animal health, plant health, economic
        planning and Monitoring Evaluation and Learning (MEL) of programs
      </p>
      <div className={styles.Banner1__container}>
        <div className={styles.Banner1__wrapper}>
          <BiFirstAid style={{ fontSize: '35px' }} />
          <div className={styles.Banner1__item}>
            <h2 style={{ fontWeight: '300' }}>24 Hours Emergency</h2>
            <p>Open around the clock for convince, quick</p>
          </div>
        </div>
        <div className={styles.Banner1__wrapper}>
          <ImLab style={{ fontSize: '35px' }} />
          <div className={styles.Banner1__item}>
            <h2 style={{ fontWeight: '300' }}>Complete Lab Services</h2>
            <p>Open around the clock for convince, quick</p>
          </div>
        </div>
        <div className={styles.Banner1__wrapper}>
          <GiNurseMale style={{ fontSize: '35px' }} />
          <div className={styles.Banner1__item}>
            <h2 style={{ fontWeight: '300' }}>Medical Proffessionals</h2>
            <p>Open around the clock for convince, quick</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
