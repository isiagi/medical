import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from '../styles/Home.module.css';

const fadeImages = [
  {
    url: '/assets/nn.jpg',
    caption: 'Biorisk management',
    href: '/Bio',
  },
  {
    url: '/assets/gf.jpg',
    caption: 'Biological Risk Assessments',
    href: '/BioRisk',
  },
  {
    url: '/assets/gf.jpg',
    caption: 'Total Quality management (TQM)',
    href: '/Total',
  },
];

const Fader = () => {
  return (
    <div>
      <Fade arrows={false} duration={2000}>
        {fadeImages.map((fadeImage, index) => (
          <div className={styles.each__fade} key={index}>
            <div className={styles.image__container}>
              <Image src={fadeImage.url} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.ahh}>
              <h2 style={{ color: '#fff', textTransform: 'uppercase' }}>
                {fadeImage.caption}
              </h2>
              <button
                style={{
                  padding: '12px',
                  color: '#fff',
                  background: 'rgb(28, 28, 143)',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '18px',
                  marginBlock: '.6rem',
                }}
              >
                <Link href={fadeImage.href}>
                  <a>Explore This Service</a>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Fader;
