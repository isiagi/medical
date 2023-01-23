import React, { useRef } from 'react';
import { CgHeadset } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import emailjs from '@emailjs/browser';
// import styles from '../styles/Home.module.css';

import styles from '/home/geofrey/Desktop/clinic/styles/Contact.module.css'

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

    event.value = '';
  };

  return (
    <div>
      <div className={styles.about__head}>
        <p style={{ fontSize: '1.7rem' }}>Contact Us</p>
        <div className={styles.about__item}>
          <p style={{ fontSize: '18px'}}>
            Our philosophy is to deliver high quality services to our customers
            at all times irrespective of the circumstances.{' '}
          </p>
        </div>
      </div>
      <div className={styles.contact__wrapper} id="contact">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '16px 32px',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '16px 32px',
              border: '1px solid rgb(28, 28, 143)',
              width: '100%',
            }}
          >
            <div>
              <GoLocation style={{fontSize: '30px', color: '#9121FD' }}/>
            </div>
            <div>
              <h2>Our Office</h2>
              <p style={{color: 'rgb(65, 65, 70)'}}>Namboole, Uganda</p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '16px 32px',
              border: '1px solid rgb(28, 28, 143)',
              width: '100%',
            }}
          >
            <div>
              <HiOutlineMail style={{fontSize: '30px', color: '#9121FD' }}/>
            </div>
            <div>
              <h2>Email Us</h2>
              <p style={{color: 'rgb(65, 65, 70)'}}>hitexconsortium@gmail.com</p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '16px 32px',
              border: '1px solid rgb(28, 28, 143)',
              width: '100%',
            }}
          >
            <div>
              <CgHeadset style={{fontSize: '30px', color: '#9121FD' }}/>
            </div>
            <div>
              <h2>Call Us</h2>
              <p style={{color: 'rgb(65, 65, 70)'}}>+256772844459</p>
            </div>
          </div>
        </div>
        <div className={styles.contact__container}>
          <h3 style={{ fontSize: '2rem', color: 'white' }}>
            Looking for a{' '}
            <span style={{ color: 'rgb(28, 28, 143)' }}>
              Certified Experts?
            </span>
          </h3>
          <p style={{color: '#fff'}}>
            We believe in providing the best possible Biosafety and Biosecurity
            quality management systems for our customers.
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
            <textarea
              rows="6"
              cols="66"
              name="message"
              placeholder="Your message"
            />
            <br />
            <button type="submit">send request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
