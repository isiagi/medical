import Link from 'next/link';
import Fader from './Fade';
import { AiOutlineArrowRight } from 'react-icons/ai';

import styles from '../styles/Hero.module.css';

const Hero1 = () => {
  return (
    <div
      // style={{
      //   display: 'flex',
      //   width: '100%',
      //   justifyContent: 'space-between',
      //   alignItems: 'center',
      //   flexWrap: 'wrap',
      // }}
    >
      <div className={styles.hero1__fader}>
        <Fader />
      </div>
      {/* <div className={styles.hero1__content}>
        {' '}
        <p>
          We work with government and non-government agencies, industry, legally
          registered companies, highly skilled individual consultants and
          academic institutions to accomplish our missions in the following
          strategic areas
        </p>
        <ul>
          <li style={{ color: 'blue' }}>
            <AiOutlineArrowRight style={{ color: '#9121FD', fontWeight: '900' }} />
            <Link href="/Bio">
              <a>Biosafety Biosecurity (Biorisk management) Consultancy </a>
            </Link>
          </li>
          <li style={{ color: 'blue' }}>
            <AiOutlineArrowRight style={{ color: '#9121FD' }} />
            <Link href="/BioRisk">
              <a>Biological Risk Assessments / Management Consultancy </a>
            </Link>
          </li>
          <li style={{ color: 'blue' }}>
            <AiOutlineArrowRight style={{ color: '#9121FD' }} />
            <Link href="/Waste">
              <a>
                Establishment of Waste management systems & supply/repair of
                incinerators{' '}
              </a>
            </Link>
          </li>
          <li style={{ color: 'blue' }}>
            <AiOutlineArrowRight style={{ color: '#9121FD' }} />
            <Link href="/BioRisk">
              <a>Biosafety Cabinet Certification</a>
            </Link>
          </li>
          <li style={{ color: 'blue' }}>
            <AiOutlineArrowRight style={{ color: '#9121FD' }} />
            <Link href="/Total">
              <a>Total Quality management (TQM)</a>
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Hero1;
