import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from '../styles/Home.module.css';

const fadeImages = [
  {
    url: '/assets/slide-01.jpg',
    caption: 'Quality human Health Care',
  },
  {
    url: '/assets/doc.jpg',
    caption: 'animal health',
  },
  {
    url: '/assets/2.jpeg',
    caption: 'plant health',
  },
];

const Hero1 = () => {
  return (
    <div>
      <Fade arrows={false} duration={2000}>
        {fadeImages.map((fadeImage, index) => (
          <div className={styles.each__fade} key={index}>
            <div className={styles.image__container}>
              <img src={fadeImage.url} />
            </div>
            <div className={styles.ahh}>
              <h2 style={{color: '#fff', textTransform:'uppercase'}}>{fadeImage.caption}</h2>
              <button style={{padding: '12px', color: '#fff',background: 'blue', borderRadius: '20px', border: 'none', fontSize: '15px'}}>Explore Our Services</button>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Hero1;
