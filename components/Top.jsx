import Link from 'next/link';
import { BsArrowUpCircleFill } from 'react-icons/bs';

import styles from '../styles/Home.module.css';

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.top1}>
        <Link href='/'>
          <BsArrowUpCircleFill
            style={{ fontSize: '35px', color: 'rgb(28, 28, 143)' }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Top;
