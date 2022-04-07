import React from 'react';

import styles from '../../styles/Home.module.css';

const LastFooter = () => {
  return (
    <div className={styles.lastFooter__wrapper}>
      <div><span style={{color: '#361500'}}>@2022</span> Hitex consortium Limited</div>
      <div className={styles.lastFooter__wrapper1}>
        <p>Privacy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default LastFooter;
