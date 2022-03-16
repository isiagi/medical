import { FaBrain } from 'react-icons/fa';
import {MdModelTraining} from 'react-icons/md'
import {MdAssessment} from 'react-icons/md'
import {FaBiohazard} from 'react-icons/fa'
import {AiOutlineAudit} from 'react-icons/ai'
import {FaClipboardList, FaUsers} from 'react-icons/fa'

import styles from '../styles/Home.module.css';

const Services = () => {
  return (
    <div className={styles.service__container} id='services'>
      <h2>Our Services</h2>
      <div className={styles.service__items}>
        <div className={styles.service__item}>
          <FaBiohazard style={{fontSize: '35px', color: 'rgb(28, 28, 143)'}}/>
          <h3>
            Biorisk management (Biosafety Biosecurity) Consultancy services
          </h3>
          <p>
            Biosafety Biosecurity is our niche; Through our highly skilled
            experts, we provide high quality Biorisk management consultancy
            services to individuals and institutions on the best approaches to
            establish and implement functional and resilient Biosafety
            Biosecurity systems under the one health approach in line with the
            requirements of national and international standards.
          </p>
        </div>
        <div className={styles.service__item}>
          <MdAssessment style={{fontSize: '35px',color: 'rgb(28, 28, 143)'}}/>
          <h3>Biological Risk Assessments</h3>
          <p>
            In the wake of global emerging and re-emerging diseases like Ebola,
            Marburg, and more recently SARS-CoV-2 among others, it’s imperative
            to set up systems which are able to detect and avert any hazards or
            threats arising from such work which involves these biological
            agents and their toxins.
          </p>
        </div>
        <div className={styles.service__item}>
          <MdModelTraining style={{fontSize: '35px',color: 'rgb(28, 28, 143)'}}/>
          <h3>Training</h3>
          <p>
            We provide high quality competency based Biosafety Biosecurity
            trainings aimed at building strong Biorisk management systems for
            our clients. Our BRM trainings are conducted in line with ISO
            35001-2019 and ISO 15190-2020 alongside the WHO Biosafety manual 4th
            edition. Our trainings emphasize: risk assessment, waste management,
            Biosecurity, occupational safety and health, management requirements
            to BRM, CQI, and shipment of biological agents.
          </p>
        </div>
        <div className={styles.service__item}>
          <FaUsers style={{fontSize: '35px', color: 'rgb(28, 28, 143)'}}/>
          <h3>Mentorship/ Coaching</h3>
          <p>
            To complement our Biorisk management (BRM) training curriculum we
            work with our clients through a well-structured mentorship and
            coaching approach to functionalize and make clear all the aspects of
            BRM as required by National and international standards. We provide
            BRM mentorship for our clients to enable continual improvement, or
            accreditation, or certification, or licensure of the personnel and
            facilities. Our well experienced mentors provide the mentorship
            onsite or off-site based on an agreed position with our clients.
          </p>
        </div>
        <div className={styles.service__item}>
          <FaClipboardList style={{fontSize: '35px', color: 'rgb(28, 28, 143)'}}/>
          <h3>Curriculum Development </h3>
          <p>
            We have partnered with the Uganda ministry of Health (MoH)
            department of National Health Laboratory and diagnostic services
            (NHLDS), Ministry of Agriculture, Animal Industries and Fisheries
            (MAAIF), Ministry of Defense (MoD) and the UN agency FAO to develop
            a one health Biorisk management training curriculum and assessment
            tools for Uganda.
          </p>
        </div>
        <div className={styles.service__item}>
          <AiOutlineAudit style={{fontSize: '35px', color: 'rgb(28, 28, 143)'}}/>
          <h3>Audits</h3>
          <p>
            To help improve our client’s BRM systems, we execute quality
            Biosafety Biosecurity audits as requested by our clients to identify
            opportunities for improvement. Our audits are based on ISO
            19011-Guidelines for auditing management systems for all kinds of
            settings and our checklists are built based on guidance from ISO
            35001:2019 Biorisk management requirements for Laboratories and
            related entities as well as ISO 15190:2020 Medical laboratories
            requirements for safety. To complement our Biorisk management (BRM)
            training curriculum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
