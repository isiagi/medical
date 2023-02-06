import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Faq = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  return (
    <div>
      <div>
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

          {/* <li>
              <div
                className={styles.faq__item}
                onClick={() => setShow1(!show1)}
              >
                How do i get a copy of my records to another provider?
              </div>
              <p className={show1 ? styles.faq__para : styles.faq__para1}>
                Everyone’s needs are different, so have a chat to your dentist
                about how often you need to have your teeth checked by them
                based on the condition of your mouth, teeth and gums. It’s
                recommended that children see their dentist at least once a
                year.
              </p>
            </li> */}

          {/* <li>
              <div
                className={styles.faq__item}
                onClick={() => setShow2(!show1)}
              >
                How do i make an appointment?
              </div>
              <p className={show1 ? styles.faq__para : styles.faq__para1}>
                If you would like to make an appointment with one of our
                practitioners, please contact our reception staff. Alternatively
                you may book your appointments online. Every effort will be made
                to accommodate your preferred time and choice of practitioner.
              </p>
            </li> */}
        </ol>
      </div>
      <div></div>
    </div>
  );
};

export default Faq;
