import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__contain}>
        <div className={styles.footer__wrapper}>
          <div>
            <h3 style={{color: 'red'}}>Hitex consortium Limited</h3>
          </div>
          <div className={styles.footer__info}>
            We a company limited by shares and by URSB legally registered
            established in 2021 in Uganda by a team of highly skilled technical
            experts in human health, animal health, plant health, economic
            planning and Monitoring Evaluation and Learning (MEL) of programs.
          </div>
          <div>
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
        </div>
        <div className={styles.footer__links}>
          <div>
            <h3 style={{color: 'red'}}>Quick Link</h3>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Ab">About Us</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__as}>
          <div>
            <h3 style={{color: 'red'}}>Core Services</h3>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/Bio">Biosafety Biosecurity (Biorisk management)</Link>
              </li>
              <li>
                <Link href="/BioRisk">Biological Risk Assessments & Management</Link>
              </li>
              <li>
                <Link href="/Waste">Waste management & supply of incinerators</Link>
              </li>
              <li>
                <Link href="/Total">Total Quality management (TQM)</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="footer__links">
          <div>
            <h3>Resources</h3>
          </div>
          <div>
            <ul>
              <li>Support</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
