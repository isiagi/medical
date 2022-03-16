import Image from 'next/image';

import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__item}>
        <h4 style={{ fontSize: '22px' }}>3 Years of Medical Excellence</h4>
        <h2>
        Hitex
          <span style={{ color: 'teal' }}> consortium </span>
        </h2>
        <p>
          Hitex consortium is a company limited by shares and by URSB legally
          registered established in 2021 in Uganda by a team of highly skilled
          technical experts in human health, animal health, plant health,
          economic planning and Monitoring Evaluation and Learning (MEL) of
          programs
        </p>
        <p>
          Our philosophy is to deliver high quality services to our customers at
          all times irrespective of the circumstances.{' '}
        </p>
        <ul>
          <li>
            <li style={{ color: 'red' }}>Our Vision</li>
            <p>
              To provide high quality life impacting services to the customers
              we serve and earn a reputation of the most appreciated, valued,
              referred and respected Consultancy Company.
            </p>
          </li>
          <li>
            <li style={{ color: 'red' }}> MISSION</li>
            <p>
              To be a competitive and reliable partner helping people feel
              confident & delivering on their success aspirations by rendering
              excellent services with honesty, ethics and unparalleled quality.
            </p>
          </li>
       
         
        </ul>
      </div>
      <div>
        <Image
          src="/assets/slide-01.jpg"
          alt="about image"
          height="400px"
          width="500px"
        />
      </div>
    </div>
  );
};

export default About;
