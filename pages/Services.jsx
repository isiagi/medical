import Servicestyles from '../styles/Contact.module.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Services from '../components/Services';

const services = () => {
  return (
    <div>
      <div className={styles.about__head}>
        <p style={{ fontSize: '1.7rem' }}>Contact Us</p>
        <div className={styles.about__item}>
          <p style={{ fontSize: '18px' }}>
            Our philosophy is to deliver high quality services to our customers
            at all times irrespective of the circumstances.{' '}
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default services;
