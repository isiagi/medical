import Image from "next/image";
import React from "react";
import InputSection from "../components/InputSection";

import styles from "../styles/Home.module.css";
import Faq from "./Faq";
import Header from "./Header";

const he = () => {
  return (
    <div className={styles.he__container}>
      <div className={styles.he__wrapper}>
        <Header
          first="FAQs"
          middle="Common Questions Answered"
          last="Your Queries, Our Answers"
        />
        <div className={styles.he__sectio}>
          {/* <InputSection
            color1={"#0067DA"}
            color2={"rgb(28, 28, 143)"}
            color3={"rgb(130, 129, 129)"}
            color4={"rgb(28, 28, 143)"}
          /> */}
          <div style={{ width: "100%", marginBottom: "4rem" }}>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default he;
