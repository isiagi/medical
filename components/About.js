import Image from 'next/image';

import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__item}>
        <h4 style ={{fontSize:"22px"}}>3 Years of Medical Excellence</h4>
        <h2>The Heart and Science<span style={{color:"teal"}}> of Medicine </span></h2>
        <p>
          We help your body restore itself by harnessing your own healing
          potential with a variety of techniques to combat areas of disease,
          injury or inflammation. This process involves a variety of techniques
          including a minimally invasive procedure conducted right in our
          clinic.
        </p>
        <ul>
          <li>Equipped for all stages of care, from prevention to rehabilitation</li>
          <li>Quality assessment program helps ensure smooth, effective operation</li>
          <li>Prepared to treat a high volume of trauma patients 24/7</li>
        </ul>
      </div>
      <div>
        <Image src="/assets/slide-01.jpg" alt="about image" height="400px" width="500px" />
      </div>
    </div>
  );
};

export default About;
