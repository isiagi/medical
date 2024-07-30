import Image from "next/image";
import React, { useRef } from "react";

import styles from "../styles/Services.module.css";
import Header from "./Header";
import { GiBiohazard } from "react-icons/gi";
import { ImEqualizer2 } from "react-icons/im";
import { GiNuclearWaste } from "react-icons/gi";
import { MdOutlineHourglassTop } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";

const service = [
  {
    id: 1,
    image: "/assets/new.jpg",
    icon: <GiBiohazard />,
    link: "/Bio",
    service: "Biosafety Biosecurity (Biorisk management) Consultancy",
    detail:
      "In the wake of global emerging and re-emerging diseases like Ebola, Marburg, and more recently SARS-CoV-2 among others",
  },
  {
    id: 2,
    image: "/assets/gallery.jpeg",
    link: "/BioRisk",
    icon: <MdOutlineHourglassTop />,
    service: "Biological Risk Assessments & Management Consultancy ",
    detail:
      "As much as biological agents and their toxins can be used in research for the advancement of science, there is a great potential for their mis-use",
  },
  {
    id: 3,
    image: "/assets/total.jpg",
    icon: <ImEqualizer2 />,
    link: "/Total",
    service: "Total Quality management (TQM)",
    detail:
      "We utilize these principles to support our customers improve their systems. Our experts have worked closely with the health  systems",
  },
  {
    id: 4,
    image: "/assets/image.png",
    icon: <GiNuclearWaste />,
    link: "/Waste",
    service:
      "Establishment of Waste management systems & supply/repair of incinerators ",
    detail:
      "There are enormous biosafety and biosecurity risks resulting from poor Healthcare waste Management (HCWM).",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <Header
        first="Awesome Services"
        middle="Our Core Services"
        last="we utilise the
          training, mentorship and audit approaches to improve our programming
          as deliever our Services below."
      />
      <div className={styles.services__wrapper}>
        <div className={styles.service__flex}>
          {service.map(({ id, image, icon, link, service, detail }) => (
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className={styles.service__item}
              key={id}
            >
              <div className={styles.service__img}>
                <Image src={image} alt={"picture"} layout="fill" />
              </div>
              <Link href={link}>
                <div className={styles.service__detail}>
                  <div className={styles.service__icon}>{icon}</div>
                  <h3 style={{ marginBottom: "1rem", color: "#1A357E" }}>
                    {service}
                  </h3>
                  <p
                    style={{
                      lineHeight: "1.5rem",
                      color: "rgb(130, 129, 129)",
                    }}
                  >
                    {detail}
                  </p>
                </div>
              </Link>
            </div>
          ))}

          {/* <div className={styles.service__item}>
            <div className={styles.service__img}>
              <Image src={'/assets/nn.jpg'} alt={'picture'} layout="fill" />
            </div>
            <Link href="/Total">
              <div className={styles.service__detail}>
                <div className={styles.service__icon}>
                  <AiOutlineSafetyCertificate />
                </div>
                <h3>Biosafety Cabinet Certification</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum
                </p>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
