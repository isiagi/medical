import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from '../styles/Fade.module.css';

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
    caption:
      'Establishment of Waste management systems & supply/repair of incinerators ',
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
            <div
              className={styles.image__container}
              style={{
                background: `linear-gradient(90deg, rgba(0,212,255,0.2007177871148459) 100%, rgba(9,9,121,0.15029761904761907) 100%, rgba(0,212,255,1) 100%),url(${fadeImage.url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className={styles.image__overlayout}>
                <h1 className={styles.image__heading}>
                  WE WORK WITH BOTH THE PUBLIC SECTOR AND PRIVATE SECTOR WITH
                </h1>

                <Link href={fadeImage.href}>
                  <h2 className={styles.image__heading1}>
                    {fadeImage.caption}
                  </h2>
                </Link>
              </div>
              {/* <Image src={fadeImage.url} layout="fill" objectFit="cover" /> */}
            </div>
            {/* <div className={styles.ahh}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  width: 'fit-content',
                  margin: '0 auto',
                  padding: '1rem',
                  borderRadius: '10px',
                  position: 'absolute',
                  top: '170px',
                  right: '0',
                }}
              >
                <p
                  style={{
                    color: 'blue',
                    textTransform: 'uppercase',
                    fontSize: '20px',
                  }}
                >
                  {fadeImage.caption}
                </p>
                <button
                  style={{
                    padding: '12px',
                    color: 'whitesmoke',
                    background: '#9121FD',
                    borderRadius: '20px',
                    border: 'none',
                    fontSize: '15px',
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
            </div> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Fader;
