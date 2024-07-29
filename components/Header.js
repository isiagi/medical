import React, { useRef } from "react";

import styles from "../styles/Header.module.css";
import { useInView } from "framer-motion";

function Header({ first, middle, last }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={styles.header__container}
    >
      <div className={styles.header__wrapper}>
        <p style={{ color: "#0067DA" }}>{first}</p>
        <h2>{middle}</h2>
        <p className={styles.header__paragraph}>{last}</p>
      </div>
    </div>
  );
}

export default Header;
