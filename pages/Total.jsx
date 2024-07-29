import Image from "next/image";
import Mini from "../components/Mini";
import Services from "../components/Services";
import Head from "next/head";

import total from "../public/assets/total.jpg";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HomeContact from "../components/HomeContact";

const Total = () => {
  // Stud3ntp@55
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Head>
        <title>Total Quality Management</title>
        <meta
          name="keywords"
          content="Total Quality Management, TQM, Quality Assurance, Continuous Improvement, Customer Satisfaction, Quality Control, Quality Management Systems"
        />
      </Head>
      <Mini
        head={"Total Quality Management (TQM)"}
        sub="Total Quality Management"
        image={"/assets/qua.jpg"}
      />
      <Header
        first="Quality Excellence"
        middle="Total Quality Management"
        last="Commitment to Superior Standards"
      />
      {/* <div style={{ padding: '8rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            // gridAutoRows: '350px',
            gap: '2rem',
          }}
        >
          <div style={{ position: 'relative', border: '1px solid red'}}>
            <Image
              src={total}
              alt="bio"
              layout="fill"
              objectFit="cover"
              className=''
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ lineHeight: '2rem' }}>
              <span style={{ color: 'rgb(28, 28, 143)' }}>
                <b>Hitex consortium Limited</b>
              </span>{' '}
              we focus on the customer to nurture organizational growth and
              improve systems. Our approach involves working with all members of
              an organization to participate in improving processes, products,
              services, and the culture in which they work. To create meaningful
              change, we focus our approach on the eight principles of total
              quality management: Customer-focused, Total employee involvement,
              Process-centered, Integrated system, Strategic and systematic
              approach, Continual improvement, Fact-based decision making and
              effective Communications strategies.{' '}
            </p>
            <p style={{ lineHeight: '2rem' }}>
              We utilize these principles to support our customers improve their
              systems. Our experts have worked closely with the health systems
              in Uganda to support laboratory quality management systems{' '}
              <b>(LQMS)</b>
              improvement towards attainment of international accreditation to
              ISO 15189:2012. Our teams possess competencies in implementation
              of ISO 9000 certification frameworks.
            </p>
          </div>
        </div>
      </div> */}
      <div style={{ padding: "0rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            // gridAutoRows: '450px',
            gap: "2rem",
          }}
        >
          <div style={{ position: "relative", height: "450px" }}>
            <Image
              src={total}
              alt="bio"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ lineHeight: "2rem", color: "rgb(130, 129, 129)" }}>
              we focus on the customer to nurture organizational growth and
              improve systems. Our approach involves working with all members of
              an organization to participate in improving processes, products,
              services, and the culture in which they work. To create meaningful
              change, we focus our approach on the eight principles of total
              quality management: Customer-focused, Total employee involvement,
              Process-centered, Integrated system, Strategic and systematic
              approach, Continual improvement, Fact-based decision making and
              effective Communications strategies.{" "}
            </p>
            <p style={{ lineHeight: "2rem", color: "rgb(130, 129, 129)" }}>
              We utilize these principles to support our customers improve their
              systems. Our experts have worked closely with the health systems
              in Uganda to support laboratory quality management systems{" "}
              <b>(LQMS)</b>
              improvement towards attainment of international accreditation to
              ISO 15189:2012. Our teams possess competencies in implementation
              of ISO 9000 certification frameworks.
            </p>
          </div>
        </div>
      </div>
      <br />
      <HomeContact />
      <Services />
    </motion.div>
  );
};

export default Total;
