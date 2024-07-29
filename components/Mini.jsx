import Link from "next/link";
import React from "react";

import styles from "../styles/Contact.module.css";

function Mini({ head, sub, image }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className={styles.about__head}
    >
      <h1 style={{ fontSize: "2rem" }}>{head}</h1>
      <div className={styles.about__item}>
        <p>
          <Link href={"/"}>Home</Link> / {sub}
        </p>
      </div>
    </div>
  );
}

export default Mini;
