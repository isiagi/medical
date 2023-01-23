import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

import styles from '../../styles/Footer.module.css';

const LastFooter = () => {
  return (
    <div className={styles.lastFooter__wrapper}>
      <div style={{height: "100%"}}>
        <BsFacebook style={{ fontSize: '1.5rem', color: 'whitesmoke' }} />
        <BsInstagram
          style={{
            fontSize: '1.5rem',
            marginLeft: '1rem',
            color: 'whitesmoke',
          }}
        />
        <AiFillTwitterCircle
          style={{
            fontSize: '1.5rem',
            marginLeft: '1rem',
            color: 'whitesmoke',
          }}
        />
      </div>
      <div>
        <span>@2022</span> Hitex consortium Limited
      </div>
      <div className={styles.lastFooter__wrapper1}>
        <p>Privacy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default LastFooter;
