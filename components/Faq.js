import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Faq = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h3 style={{textAlign: 'center', color: 'rgb(28, 28, 143)', fontSize: '2em', marginTop: '2rem'}}>Frequently Asked Questions</h3>
      <div className={styles.faq__container}>
        <div style={{ maxWidth: '500px' }}>
          <ol>
            <li>
              <div className={styles.faq__item} onClick={() => setShow(!show)}>
                How do i make an appointment?
              </div>
              <p className={show ? styles.faq__para : styles.faq__para1}>
                If you would like to make an appointment with one of our
                practitioners, please contact our reception staff. Alternatively
                you may book your appointments online. Every effort will be made
                to accommodate your preferred time and choice of practitioner.
              </p>
            </li>
          </ol>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Faq;
