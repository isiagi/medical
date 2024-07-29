import React from "react";
import Header from "./Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Image from "next/image";

import styles from "../styles/About.module.css";

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

function Values() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "16px 32px",
        width: "100%",
      }}
    >
      <Header
        first="Our Values"
        middle="Principles We Uphold"
        last="Guiding Our Every Action"
      />
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
              <p style={{ color: "rgb(130, 129, 129)" }}>{item.content}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Values;
