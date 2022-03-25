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
  {
    url: '/assets/gf.jpg',
    caption: 'Waste management & supply of incinerators',
    href: '/Waste',
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
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  width: 'fit-content',
                  margin: '0 auto',
                  padding: '1rem',
                  borderRadius: '10px',
                }}
              >
                <h2
                  style={{
                    color: 'rgb(28, 28, 143)',
                    textTransform: 'uppercase',
                    fontSize: '30px'
                  }}
                >
                  {fadeImage.caption}
                </h2>
                <button
                  style={{
                    padding: '12px',
                    color: 'whitesmoke',
                    background: 'rgb(28, 28, 143)',
                    borderRadius: '20px',
                    border: 'none',
                    fontSize: '18px',
                    marginBlock: '.6rem',
                    width: '70%',
                    margin: '0 auto',
                  }}
                >
                  <Link href={fadeImage.href}>
                    <a>Explore This Service</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Fader;
