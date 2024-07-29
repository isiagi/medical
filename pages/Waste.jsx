import Image from "next/image";
import Mini from "../components/Mini";

import wast from "../public/assets/image.png";
import p from "../public/assets/p.jpg";
import lo from "../public/assets/lo.jpg";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Utility from "../components/Utility";

const Total = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Head>
        <title>
          Waste Management, Waste Transportation & Supply Of Incinerators
        </title>
        <meta
          name="keywords"
          content="Waste Management, Waste Transportation, Incinerators, Waste Disposal, Environmental Solutions"
        />
      </Head>
      <Mini
        head={"Waste Management, Waste Transportation & Supply Of Incinerators"}
        sub="Waste management & supply of incinerators"
        image={"/assets/was.jpg"}
      />
      <Header
        first="Waste Solutions"
        middle="Management, Transportation & Incinerators"
        last="Sustainable Practices for a Cleaner Future"
      />
      <div style={{ padding: "0rem 2rem", paddingBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            // gridAutoRows: '450px',
            gap: "2rem",
          }}
        >
          <div style={{ position: "relative" }}>
            <Image
              src={wast}
              alt="bio"
              // layout="fill"
              // objectFit="cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ lineHeight: "2rem", color: "rgb(130, 129, 129)" }}>
              There are enormous biosafety and biosecurity risks resulting from
              poor Healthcare waste Management (HCWM) across healthcare
              facilities and the final disposal sites. The situation has further
              been exacerbated by the lack of well-designed systems and final
              disposal infrastructure to handle the ever-increasing waste
              management requirements. Critical to this is the rapid advancement
              in technology resulting in the development and employment of novel
              point-of-care testing (POCT) technologies both at static and
              outreach sites, generation of liquid waste from laboratory
              procedures with some of this waste presenting carcinogenic
              elements upon consumption. As the advancement in technology is
              happening rapidly compared to the mitigation measures, at Hitex we
              believe there is need work with our customers to map out their
              work routines and proactively design systems that would enable
              safe and secure disposal of the various waste streams generated by
              the facility. Our team has worked with the Uganda ministry of
              health department of National health laboratory and diagnostic
              services to develop: The national policy and guidelines on waste
              management, assessment tool for HCWM, and the waste management
              training curriculum. We also supply incinerators and provide after
              installation services to our customers based on their need
            </p>
            <p style={{ lineHeight: "2rem", color: "rgb(130, 129, 129)" }}>
              At Hitex we offer Waste transportation services for both private
              and public entities
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            paddingBlock: "50px",
          }}
        >
          <Image
            src={p}
            alt="bio"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "50%", height: "auto", objectFit: "cover" }}
          />
          <Image
            src={lo}
            alt="bio"
            width={0}
            height={0}
            style={{ width: "50%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
      <br />
      <Utility />
    </motion.div>
  );
};

export default Total;
