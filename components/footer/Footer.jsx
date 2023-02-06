import React from 'react';
// import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { CgHeadset } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__contain}>
        <div className={styles.footer__wrapper}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                background: 'white',
                width: '70px',
                height: '60px',
                borderRadius: '50%',
              }}
            >
              <Image
                src={'/assets/logo.png'}
                alt="logo"
                width="75"
                height="65"
              />
            </div>
            <h3
              style={{
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              Hitex consortium Limited
            </h3>
          </div>
          <div className={styles.footer__info}>
            We are company limited by shares and legally registered by URSB and
            URA. Established in 2021 in Uganda by a team of highly skilled
            technical experts in human health, animal health, plant and
            environmental health, as well as Monitoring Evaluation and Learning
            (MEL).
          </div>
        </div>

        <div className={styles.footer__as}>
          <div>
            <h3
              style={{
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              Core Services
            </h3>
          </div>
          <div>
            <ul>
              <li style={{fontWeight: 'bold'}}>
                <Link href="/Bio">
                  Biosafety Biosecurity (Biorisk management) Consultancy
                </Link>
              </li>
              <li style={{fontWeight: 'bold'}}>
                <Link href="/BioRisk">
                  Biological Risk Assessments & Management Consultancy
                </Link>
              </li>
              <li style={{fontWeight: 'bold'}}>
                <Link href="/Waste">
                  Establishment of Waste management systems & supply/repair of
                  incinerators
                </Link>
              </li>
              {/* <li style={{fontWeight: 'bold'}}>
                <Link href="/Total">Biosafety Cabinet Certification</Link>
              </li> */}
              <li style={{fontWeight: 'bold'}}>
                <Link href="/Total">Total Quality management (TQM)</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__links}>
          <div>
            <h3
              style={{
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              Quick Link
            </h3>
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
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3
              style={{
                fontSize: '22px',
                marginBottom: '10px',
              }}
            >
              Contact Us
            </h3>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.2rem',
                color: '#E9542D',
              }}
            >
              <CgHeadset fontSize={20} />
              <p>+256772844459</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.2rem',
                color: '#E9542D',
              }}
            >
              <HiOutlineMail fontSize={20} />
              <p>hitexconsortium@gmail.com</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px',color: '#E9542D', fontSize: '1.2rem',}}>
              <GoLocation fontSize={20} />
              <p>Namboole-Kampala, Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
