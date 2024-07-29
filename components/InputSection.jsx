import React, { useRef } from "react";
import styles from "../styles/Form.module.css";

import emailjs from "@emailjs/browser";

function InputSection({ color1, color2, color3, color4 }) {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_6fnatqa",
        "template_qgi7ekr",
        form.current,
        "pjiNHTJo84E9K5tuy"
      )
      .then(
        (result) => {
          console.log("sent", result.text);
          alert("Email Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    event.value = "";
  };

  // #0067DA
  // rgb(28, 28, 143)
  // rgb(130, 129, 129)

  return (
    <div className={styles.contact__container}>
      <h3 style={{ fontSize: "2rem", color: color1 }}>
        Looking for a <span style={{ color: color2 }}>Certified Experts?</span>
      </h3>
      <p style={{ color: color3, paddingTop: "1rem" }}>
        We believe in providing the best possible Biosafety and Biosecurity
        quality management systems for our customers.{" "}
        <span>
          <em>Let&apos;s Talk</em>
        </span>
      </p>

      <br />
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <br />
        <div className={styles.contact__flex}>
          <input
            type="text"
            placeholder="Your Phone"
            name="number"
            // style={{ width: '255px', marginRight: '.5em' }}
          />

          <input
            type="text"
            placeholder="Your Email"
            name="email"
            // style={{ width: '280px' }}
          />
        </div>
        <br />
        <textarea
          rows="6"
          cols="66"
          name="message"
          placeholder="Your message"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputSection;
