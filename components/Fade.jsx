import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from '../styles/Home.module.css';

const fadeImages = [
  {
    url: '/assets/nn.jpg',
    caption: 'Biosafety Biosecurity (Biorisk management) Consultancy',
    href: '/Bio',
  },
  {
    url: '/assets/gf.jpg',
    caption: 'Biological Risk Assessments & Management Consultancy ',
    href: '/BioRisk',
  },
  {
    url: '/assets/total.jpg',
    caption: 'Total Quality management (TQM)',
    href: '/Total',
  },
  {
    url: '/assets/gf.jpg',
    caption: 'Establishment of Waste management systems & supply/repair of incinerators ',
    href: '/Waste',
  },
  {
    url: '/assets/nn.jpg',
    caption: 'Biosafety Cabinet Certification  ',
    href: '/Cabinet',
  },
];

const Fader = () => {
  return (
    <div>
      <Fade arrows={false} duration={4000}>
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
                  position: 'absolute',
                  top: '170px',
                  right: '0'
                }}
              >
                <p
                  style={{
                    color: 'rgb(28, 28, 143)',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                  }}
                >
                  {fadeImage.caption}
                </p>
                <button
                  style={{
                    padding: '12px',
                    color: 'whitesmoke',
                    background: 'rgb(28, 28, 143)',
                    borderRadius: '20px',
                    border: 'none',
                    fontSize: '13px',
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
