import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Home.module.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_wtxka0r',
        'template_qgi7ekr',
        form.current,
        'pjiNHTJo84E9K5tuy',
      )
      .then(
        (result) => {
          console.log('sent', result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

      event.value = ''
  };

  return (
    <div className={styles.contact__wrapper} id="contact">
      <div className={styles.contact__container}>
        <h3 style={{ fontSize: '2rem' }}>
          Looking for a{' '}
          <span style={{ color: 'rgb(28, 28, 143)' }}>Certified Experts?</span>
        </h3>
        <p>
          We believe in providing the best possible Biosafety and Biosecurity quality management systems for our customers.
        </p>
        <br />
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" />
          <br />
          <br />
          <input
            type="text"
            placeholder="Your Phone"
            name="number"
            style={{ width: '255px', marginRight: '.5em' }}
          />

          <input
            type="text"
            placeholder="Your Email"
            name="email"
            style={{ width: '280px' }}
          />
          <br />
          <br />
          <textarea rows="6" cols="66" name="message" placeholder="Your message"/>
          <br />
          <button type="submit">send request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
