import styles from '../styles/Home.module.css';

const Contact = () => {
  return (
    <div className={styles.contact__wrapper} id="contact">
      <div className={styles.contact__container}>
        <h3 style={{ fontSize: '2rem' }}>
          Looking for a{' '}
          <span style={{ color: 'rgb(28, 28, 143)' }}>Certified Doctor?</span>
        </h3>
        <p>
          We believe in providing the best possible care to all our existing
          patients and welcome new patients to sample.
        </p>
        <br />
        <form>
          <input type="text" placeholder="Your Name" />
          <br />
          <br />
          <input
            type="text"
            placeholder="Your Phone"
            style={{ width: '255px', marginRight: '.5em' }}
          />

          <input
            type="text"
            placeholder="Your Email"
            style={{ width: '280px' }}
          />
          <br />
          <br />
          <textarea rows="6" cols="66" />
          <br />
          <button type="submit">send request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
