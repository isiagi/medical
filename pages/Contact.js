import React, { useRef } from "react";
import { CgHeadset } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
// import styles from '../styles/Home.module.css';

import styles from "../styles/Contact.module.css";
import Mini from "../components/Mini";
import InputSection from "../components/InputSection";
import Head from "next/head";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Head>
        <title>Contact Hitex</title>
        <meta
          name="keywords"
          content="Contact Hitex, Hitex Contact Information, Contact Us, Hitex Support, Customer Service, Hitex Location"
        />
      </Head>
      <Mini head={"Contact Us"} sub="Contact" image={"/assets/contact.jpg"} />
      <div className={styles.contact__wrapper} id="contact">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            padding: "16px 32px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "16px 32px",
              border: "1px solid #fff",
              width: "100%",
            }}
          >
            <div>
              <GoLocation style={{ fontSize: "30px", color: "#fff" }} />
            </div>
            <div>
              <h2 style={{ color: "rgb(28, 28, 143)" }}>Our Office</h2>
              <p style={{ color: "#fff" }}>Namboole, Uganda</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "16px 32px",
              border: "1px solid #fff",
              width: "100%",
            }}
          >
            <div>
              <HiOutlineMail style={{ fontSize: "30px", color: "#fff" }} />
            </div>
            <div>
              <h2 style={{ color: "rgb(28, 28, 143)" }}>Email Us</h2>
              <p style={{ color: "#fff" }}>hitexconsortium@gmail.com</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "16px 32px",
              border: "1px solid #fff",
              width: "100%",
            }}
          >
            <div>
              <CgHeadset style={{ fontSize: "30px", color: "#fff" }} />
            </div>
            <div>
              <h2 style={{ color: "rgb(28, 28, 143)" }}>Call Us</h2>
              <p style={{ color: "#fff" }}>+256772844459</p>
            </div>
          </div>
        </div>
        <InputSection
          color1={"rgb(28, 28, 143)"}
          color2={"rgb(28, 28, 143)"}
          color3={"#fff"}
          color4={"rgb(28, 28, 143)"}
        />
      </div>
    </motion.div>
  );
};

export { InputSection };

export default Contact;

// function InputSection(params) {
//   const form = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     emailjs
//       .sendForm(
//         'service_wtxka0r',
//         'template_qgi7ekr',
//         form.current,
//         'pjiNHTJo84E9K5tuy',
//       )
//       .then(
//         (result) => {
//           console.log('sent', result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         },
//       );

//     event.value = '';
//   };

//   return (
//     <div className={styles.contact__container}>
//       <h3 style={{ fontSize: '2rem', color: 'white' }}>
//         Looking for a{' '}
//         <span style={{ color: 'rgb(28, 28, 143)' }}>Certified Experts?</span>
//       </h3>
//       <p style={{ color: '#fff' }}>
//         We believe in providing the best possible Biosafety and Biosecurity
//         quality management systems for our customers.
//       </p>
//       <br />
//       <form ref={form} onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Your Name" />
//         <br />
//         <br />
//         <input
//           type="text"
//           placeholder="Your Phone"
//           name="number"
//           style={{ width: '255px', marginRight: '.5em' }}
//         />

//         <input
//           type="text"
//           placeholder="Your Email"
//           name="email"
//           style={{ width: '280px' }}
//         />
//         <br />
//         <br />
//         <textarea
//           rows="6"
//           cols="66"
//           name="message"
//           placeholder="Your message"
//         />
//         <br />
//         <button type="submit">send request</button>
//       </form>
//     </div>
//   );
// }
