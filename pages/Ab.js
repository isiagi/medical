import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import styles from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link";
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

const data = [
  {
    id: 1,
    img: "/assets/account.jpg",
    title: "Accountability",
    content:
      "As a company and as individuals, we accept full responsibility for our performance and acknowledge our accountability for the ultimate outcome of all that we do. We strive for continuous improvement, believing that competence, reliability, and rigorous adherence to process discipline are the keys to excellence.",
  },
  {
    id: 2,
    img: "/assets/inte.jpg",
    title: "Intergrity",
    content:
      "Credibility is the key to our success; therefore, all of our processes, decisions and actions ultimately are driven by integrity. We are honest and forthright in all our dealings with our customers. We strictly comply with the laws and regulations governing our business, not only as a legal obligation and as a competitive necessity, but because it is the right thing to do.",
  },
  {
    id: 3,
    img: "/assets/qua.jpg",
    title: "Quality",
    content:
      "The client/patient comes first in everything we do. Our company came into existence for serving and satisfying our valued customers and we ensure that we make a positive difference in the success and future of our clients.",
  },
  {
    id: 4,
    img: "/assets/col.jpeg",
    title: "Colaboration",
    content:
      "We believe in teamwork and value meaningful partnerships with other organizations and individuals that share and will enable us to deliver our mission and vision. We achieve excellence by putting collective goals ahead of personal interests. ",
  },
];

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
        <Who />
        <div className={styles.about__container}>
          <div style={{ marginBottom: "4rem" }}>
            <div className={styles.about__item1}>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.9em",
                  margin: "1rem 0",
                }}
              >
                Vision / <span>Mission</span>
              </h3>
              <Tabs style={{ fontSize: "18px" }}>
                <TabList>
                  <Tab>Vision</Tab>
                  <Tab>MISSION</Tab>
                </TabList>

                <TabPanel>
                  <p style={{ color: "rgb(130, 129, 129)" }}>
                    To provide high quality life impacting services to the
                    customers we serve and earn a reputation of the most
                    appreciated, valued, referred and respected Consultancy
                    Company.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p style={{ color: "rgb(130, 129, 129)" }}>
                    To be a competitive and reliable partner helping people feel
                    confident & delivering on their success aspirations by
                    rendering excellent services with honesty, ethics and
                    unparalleled quality.
                  </p>
                </TabPanel>
              </Tabs>
            </div>
            <div
              style={{
                background: "#fff",
                padding: "16px 32px",
                width: "100%",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.9em",
                  margin: "1rem 0",
                  paddingBlock: "2rem",
                }}
              >
                Our Values
              </h3>
              {/* <div className={styles.about__wra}>
            {data.map((item) => (
              <div
                className={styles.about__wrap}
                style={{
                  background: `linear-gradient(rgba(3, 17, 144, 0.8), rgba(3, 17, 144, 0.8)),url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                key={item.id}
              >
                <h3
                  style={{ color: 'rgb(236, 75, 54)' }}
                >{`${item.id}. ${item.title}`}</h3>
                <p style={{ color: 'whitesmoke' }}>{item.content}</p>
              </div>
            ))}
          </div> */}
              <Splide
                options={{
                  rewind: true,
                  width: "100%",
                  perPage: 3,
                  focus: "center",
                  arrows: true,
                  gap: "1rem",
                  autoplay: true,
                  breakpoints: {
                    640: {
                      destroy: true,
                    },
                  },
                }}
              >
                {data.map((item) => (
                  <SplideSlide key={item.id}>
                    <div className={styles.helo} data-splide-interval="1000">
                      <Image
                        src={item.img}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "250px" }}
                      />
                      <h3
                        style={{
                          color: "rgb(236, 75, 54)",
                          textAlign: "center",
                          fontSize: "1.4rem",
                          paddingTop: "1rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "rgb(130, 129, 129)" }}>
                        {item.content}
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.9em",
                  margin: "1rem 0",
                  paddingBlock: "2rem",
                }}
              >
                Certifications
              </h3>

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
