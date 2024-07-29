import React, { useRef } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";

import styles from "../styles/Util.module.css";
import Header from "./Header";
import { useInView } from "framer-motion";

function Utility() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className={styles.util__container}>
      <Header
        first="Awesome Features"
        middle="Our Core Features"
        last="we utilise the
          training, mentorship and audit approaches to improve our programming
          as described below."
      />
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
        }}
        className={styles.util__wrapper}
      >
        <div className={styles.util__flex}>
          <div className={styles.util__item}>
            <BsArrowRepeat className={styles.service__item__icon} />
            <h2>Training</h2>
            <p>
              We provide high quality competency based Biosafety Biosecurity
              trainings. Our trainings emphasize: risk assessment, waste
              management, Biosecurity, occupational safety and health,
              management requirements to BRM, CQI, and shipment of biological
              agents.
            </p>
          </div>
          <div className={styles.util__item}>
            <FiUsers className={styles.service__item__icon} />
            <h2>Mentorship / Coaching</h2>
            <p>
              We provide BRM mentorship for our clients to enable continual
              improvement, or accreditation, or certification, or licensure of
              the personnel and facilities. Our well experienced mentors provide
              the mentorship onsite or off-site based on an agreed position with
              our clients.
            </p>
          </div>
          <div className={styles.util__item}>
            <HiOutlineClipboardList className={styles.service__item__icon} />
            <h2>Curriculum Development</h2>
            <p>
              We have partnered with the Uganda ministry of Health (MoH)
              department of National Health Laboratory and diagnostic services
              Ministry of Agriculture and the UN agency FAO to develop a one
              health Biorisk management training curriculum and assessment tools
              for Uganda.
            </p>
          </div>
          <div className={styles.util__item}>
            <AiOutlineAudit className={styles.service__item__icon} />
            <h2>Audits</h2>
            <p>
              To help improve our client’s BRM systems, we execute quality
              Biosafety Biosecurity audits as requested by our clients to
              identify opportunities for improvement. Our audits are based on
              ISO 19011-Guidelines and our checklists are built based on
              guidance from ISO 35001:2019.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
