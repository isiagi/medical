import Image from "next/image";
import React from "react";
import styles from "../styles/Who.module.css";
import Ban from "./Ban";

import imgh from "../public/assets/who.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

function Who() {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 1 }}
      className={styles.who__container}
    >
      <div className={styles.who__wrapper}>
        <div className={styles.who__section}>
          <div>
            <h1
              style={{
                textAlign: "center",
                color: "rgb(28, 28, 143)",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              Who We Are
            </h1>
            <Ban />
          </div>
          <div style={{ backgroundColor: "red" }}>
            <Image
              src={imgh}
              alt={"hf"}
              // layout="fill"
              // objectFit="cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Who;
