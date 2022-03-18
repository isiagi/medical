import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <h3 style={{color: 'rgb(28, 28, 143)'}}>HITEX CONSORTIUM LIMITED</h3>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Testimonials</Link>
            </li>
            <li>
              <Link href="#">Faq</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__form}>
          <h3 style={{color: 'rgb(28, 28, 143)'}}>Get the freshest Hitex news</h3>
          <form>
            <input type="text" placeholder="Your email here" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <div className={styles.footer__last}>
        <div className={styles.footer__last_terms}>
          <p><Link href="#">Terms and Conditions |</Link></p>
          <p><Link href="#">Privacy Policy</Link></p>
        </div>
        <div className={styles.footer__last_icons}>
            <BsFacebook />
            <AiFillTwitterCircle />
            <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
