import Link from 'next/link';
import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdTableRows } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';

import styles from '../styles/Home.module.css';
import Image from 'next/image';

const NavBar = () => {
  const [offSet, setOffset] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className={styles.nav__wrapper}>
      <nav className={offSet > 40 ? styles.nav1 : styles.nav}>
        <div className={styles.nav__logo}>
          <Image src={'/assets/logo.png'} alt="logo" width="60" height="50" />
          <h3>
            <span style={{ color: 'rgb(28, 28, 143)' }}>HITEX</span>{' '}
            <span style={{ color: 'red' }}>CONSORTIUM LIMITED</span>
          </h3>
        </div>
        <div className={styles.nav__cancel}>
          {open ? (
            <GiCancel
              className={styles.nav__cancel__icon}
              onClick={() => setOpen(false)}
            />
          ) : (
            <MdTableRows
              className={styles.nav__cancel__icon}
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        <div className={`${styles.nav__items} ${open ? styles.active : ''}`}>
          <ul>
            <li onClick={() => setOpen(false)} >
              <Link href="/">HOME</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/#about">ABOUT US</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/#services">SERVICES</Link>
            </li>
            {/* <li onClick={() => setOpen(false)}>TESTIMONIALS</li> */}
            <li onClick={() => setOpen(false)}>
              <Link href="#contact">CONTACT</Link>
            </li>
            <li>
              <Link href="https://api.whatsapp.com/send?phone=256772844459">
                <a>
                  <IoLogoWhatsapp
                    style={{ fontSize: '25px', color: 'rgb(28, 28, 143)' }}
                  />
                  +256772844459
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
