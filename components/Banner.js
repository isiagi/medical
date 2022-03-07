import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

import styles from '../styles/Home.module.css'

const Banner = () => {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__column}>
        <div>
          <GrLocation />
          <h3 style={{fontSize: '15px'}}>Bweyogerere</h3>
        </div>
        <div>
          <FiPhoneCall />
          <h3 style={{fontSize: '15px'}}>0701844459/0772844459</h3>
        </div>
        <div>
          <HiOutlineMail />
          <h3 style={{fontSize: '15px'}}>Hitexconsortium@mail.com</h3>
        </div>
      </div>
      <div className={styles.banner__icons}>
        <BsFacebook />
        <AiFillTwitterCircle />
        <BsInstagram />
      </div>
    </div>
  );
};

export default Banner;
