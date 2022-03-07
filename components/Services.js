import { FaBrain } from 'react-icons/fa';

import styles from '../styles/Home.module.css';

const Services = () => {
  return (
    <div className={styles.service__container}>
      <h2>Our Services</h2>
      <div className={styles.service__items}>
        <div className={styles.service__item}>
          <FaBrain />
          <h3>Human Health</h3>
          <p>Hitex consortium provides the following Human Health services</p>
          <ul>
            <li>Complete Check Up</li>
            <li>X-Ray</li>
            <li>EKG</li>
            <li>UltraSound</li>
            <li>Well Women Exam</li>
          </ul>
        </div>

        <div className={styles.service__item}>
          <FaBrain />
          <h3>Animal Health</h3>
          <p>Hitex consortium provides the following Human Health services</p>
          <ul>
            <li>Complete Check Up</li>
            <li>X-Ray</li>
            <li>EKG</li>
            <li>UltraSound</li>
            <li>Well Women Exam</li>
          </ul>
        </div>

        <div className={styles.service__item}>
          <FaBrain />
          <h3>Plant Health</h3>
          <p>Hitex consortium provides the following Human Health services</p>
          <ul>
            <li>Complete Check Up</li>
            <li>X-Ray</li>
            <li>EKG</li>
            <li>UltraSound</li>
            <li>Well Women Exam</li>
          </ul>
        </div>

        <div className={styles.service__item}>
          <FaBrain />
          <h3>Economic Planning</h3>
          <p>Hitex consortium provides the following Human Health services</p>
          <ul>
            <li>Complete Check Up</li>
            <li>X-Ray</li>
            <li>EKG</li>
            <li>UltraSound</li>
            <li>Well Women Exam</li>
          </ul>
        </div>

        <div className={styles.service__item}>
          <FaBrain />
          <h3>Monitoring Evaluation and Learning (MEL)</h3>
          <p>Hitex consortium provides the following Human Health services</p>
          <ul>
            <li>Complete Check Up</li>
            <li>X-Ray</li>
            <li>EKG</li>
            <li>UltraSound</li>
            <li>Well Women Exam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
