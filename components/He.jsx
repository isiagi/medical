import Image from "next/image";
import React from "react";
import InputSection from "../components/InputSection";

import styles from "../styles/Home.module.css";
import Faq from "./Faq";

const he = () => {
  return (
    <div className={styles.he__container}>
      <div className={styles.he__wrapper}>
        <div className={styles.he__heading}>
          <p style={{ color: "#0067DA" }}>Important Questions</p>
          <h1 style={{ color: "rgb(28, 28, 143)" }}>
            Frequently Asked Questions
          </h1>
        </div>
        <div className={styles.he__section}>
          <InputSection
            color1={"#0067DA"}
            color2={"rgb(28, 28, 143)"}
            color3={"rgb(130, 129, 129)"}
            color4={"rgb(28, 28, 143)"}
          />
          <div style={{ width: "100%" }}>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default he;
