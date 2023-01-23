import Servicestyles from '../styles/Contact.module.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

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
      <div>
        <div className={Servicestyles.service__wrapper}>
          <div className={Servicestyles.service__img}>
            <Image src={'/assets/nn.jpg'} alt="" width={500} height={500}/>
          </div>
          <div>
            <div>
              <p>
                Our philosophy is to deliver high quality services to our
                customers at all times irrespective of the circumstances.{' '}
              </p>
            </div>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
