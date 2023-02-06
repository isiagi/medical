import Link from 'next/link';
import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdTableRows } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';

import styles from '../styles/Nav.module.css';
import Image from 'next/image';

import { useRouter } from 'next/router';

const NavBar = () => {
  const [offSet, setOffset] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const router = useRouter();

  return (
    <div className={styles.nav__wrapper}>
      <nav className={offSet > 40 ? styles.nav1 : styles.nav}>
        <div className={styles.nav__logo}>
          <Image src={'/assets/logo.png'} alt="logo" width="75" height="65" />
          <h3>
            <span style={{ color: 'rgb(28, 28, 143)' }}>HITEX</span>{' '}
            <span style={{ color: 'rgb(236, 75, 54)' }}>CONSORTIUM LTD</span>
          </h3>
        </div>

        <div className={`${styles.nav__items} ${open ? styles.active : ''}`}>
          <ul>
            <Link href="/">
              <li
                className={router.pathname == '/' ? `${styles.linkactive}` : ''}
                onClick={() => setOpen(false)}
              >
                HOME
              </li>
            </Link>
            <Link href="/Ab">
              <li
                className={
                  router.pathname == '/Ab' ? `${styles.linkactive}` : ''
                }
                onClick={() => setOpen(false)}
              >
                ABOUT US
              </li>
            </Link>
            <Link href="/Services">
              <li
                className={
                  router.pathname == '/Services' ? `${styles.linkactive}` : ''
                }
                onClick={() => setOpen(false)}
              >
                SERVICES
              </li>
            </Link>
            {/* <li onClick={() => setOpen(false)}>TESTIMONIALS</li> */}
            <Link href="/Contact">
              <li
                className={
                  router.pathname == '/Contact' ? `${styles.linkactive}` : ''
                }
                onClick={() => setOpen(false)}
              >
                CONTACT
              </li>
            </Link>
            {/* <li>
              <Link href="https://api.whatsapp.com/send?phone=256772844459">
                <a>
                  <IoLogoWhatsapp
                    style={{ fontSize: '25px', color: 'rgb(28, 28, 143)' }}
                  />
                  +256772844459
                </a>
              </Link>
            </li> */}
          </ul>
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
      </nav>
    </div>
  );
};

export default NavBar;
