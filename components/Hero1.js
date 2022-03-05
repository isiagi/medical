import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import styles from '../styles/Home.module.css'

const fadeImages = [
  {
    url: '/assets/slide-01.jpg',
    caption: 'Quality Health Care',
  },
  {
    url: '/assets/slide-02.jpg',
    caption: 'Second Slide',
  },
  {
    url: '/assets/slide-03.jpg',
    caption: 'Third Slide',
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
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Hero1;
