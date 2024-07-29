import styles from "../styles/About.module.css";
import Image from "next/image";

import Mini from "../components/Mini";
import Who from "../components/Who";
import { motion } from "framer-motion";

import Head from "next/head";

// const zoom = mediumZoom('[data-zoomable]')

// import img1 from '../public/assets/
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Values from "../components/Values";

const Ab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Head>
        <title>About Hitex Consortium</title>
      </Head>
      <div className={styles.about__wrapper} id="about">
        {/* <div className={styles.about__head}>
        <h4 style={{ fontSize: '1.7rem' }}>About Us</h4>
        <div className={styles.about__item}>
          <p style={{ fontSize: '18px' }}>
            Our philosophy is to deliver high quality services to our customers
            at all times irrespective of the circumstances.{' '}
          </p>
        </div>
      </div> */}
        <Mini head={"About Us"} sub="About Us" image={"/assets/gf.jpg"} />
        <Header
          first="Who We Are"
          middle="Our Journey & Purpose"
          last="Committed to Making a Difference"
        />
        <Who />
        <div className={styles.about__container}>
          <div style={{ marginBottom: "4rem" }}>
            <div className={styles.about__item1}>
              <Mission />
            </div>
            <Values />
            <div style={{ marginTop: "4rem" }}>
              <Header
                first="Our Certifications"
                middle="Accreditations & Standards"
                last="Recognized for Excellence"
              />

              <div
                style={{ padding: "0 2rem" }}
                className={styles.gallery__flex}
              >
                <LightGallery
                  // onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames={styles.gallery__flex}
                >
                  {im.map(({ id, img }) => (
                    <a href={img} key={id}>
                      <Image
                        alt="img1"
                        src={img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  ))}
                </LightGallery>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Ab;

const im = [
  {
    id: 1,
    img: "/assets/lov.jpg",
  },
  {
    id: 2,
    img: "/assets/ho.jpg",
  },
  {
    id: 3,
    img: "/assets/BWM Certification - Chair Letter to Paul Okwalinga-1.png",
  },
  {
    id: 4,
    img: "/assets/AfRSME Cert-1new.png",
  },
  {
    id: 5,
    img: "/assets/IFBA-BWM CERTIFICATE - Paul Okwalinga-1.png",
  },
  {
    id: 6,
    img: "/assets/paul1.png",
  },
];
