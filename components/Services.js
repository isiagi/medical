import { FaBrain } from 'react-icons/fa';
import { MdModelTraining } from 'react-icons/md';
import { MdAssessment } from 'react-icons/md';
import { FaBiohazard } from 'react-icons/fa';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaClipboardList, FaUsers } from 'react-icons/fa';

import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Services = () => {
  return (
    <div className={styles.service__container} id="services">
      <h2 style={{ color: 'rgb(236, 75, 54)' }}>Our Services</h2>
      <p style={{textAlign: 'center',paddingBottom: '4rem' }}>
        We offer consultancy services in <Link href="#">Biosafety Biosercurity</Link>, <Link href="#">Biological Risk
        Assesement</Link> , <Link href="#">Waste Manangement</Link>, <Link href="#">Biosafety Cabinet Certification</Link> and
        <Link href="#">Total Quality management</Link>, and we utilise the training, mentorship and audit approaches to improve our programming as described below.
      </p>
      <div className={styles.service__items}>
        <div className={styles.service__item}>
          <div className={styles.service__item__one}>
            <MdModelTraining className={styles.service__item__icon} />
            <h3>Training</h3>
          </div>
          <p>
            We provide high quality competency based Biosafety Biosecurity
            trainings. Our trainings emphasize: risk assessment, waste
            management, Biosecurity, occupational safety and health, management
            requirements to BRM, CQI, and shipment of biological agents.
          </p>
        </div>
        <div className={styles.service__item}>
          <div className={styles.service__item__one}>
            <FaUsers className={styles.service__item__icon} />
            <h3>Mentorship/ Coaching</h3>
          </div>
          <p>
            We provide BRM mentorship for our clients to enable continual
            improvement, or accreditation, or certification, or licensure of the
            personnel and facilities. Our well experienced mentors provide the
            mentorship onsite or off-site based on an agreed position with our
            clients.
          </p>
        </div>
        <div className={styles.service__item}>
          <div className={styles.service__item__one}>
            <FaClipboardList className={styles.service__item__icon} />
            <h3>Curriculum Development </h3>
          </div>
          <p>
            We have partnered with the Uganda ministry of Health (MoH)
            department of National Health Laboratory and diagnostic services
            Ministry of Agriculture and the UN agency FAO to develop a one
            health Biorisk management training curriculum and assessment tools
            for Uganda.
          </p>
        </div>
        <div className={styles.service__item}>
          <div className={styles.service__item__one}>
            <AiOutlineAudit className={styles.service__item__icon} />
            <h3>Audits</h3>
          </div>
          <p>
            To help improve our client’s BRM systems, we execute quality
            Biosafety Biosecurity audits as requested by our clients to identify
            opportunities for improvement. Our audits are based on ISO
            19011-Guidelines and our checklists are built based on guidance from
            ISO 35001:2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
