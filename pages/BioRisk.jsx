import Image from "next/image";
import Mini from "../components/Mini";
import Utility from "../components/Utility";

import Head from "next/head";

import nn from "../public/assets/gallery2.jpeg";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Mission from "../components/Mission";

const BioRisk = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
      style={{}}
    >
      <Head>
        <title>Biological Risk Assessments</title>
        <meta
          name="keywords"
          content="Biological Risk Assessments, Biohazard Assessment, Biological Hazard Evaluation, Risk Management, Biosafety Protocols"
        />
      </Head>
      <Mini
        head="Biological Risk Assessments"
        sub="Biological Risk Assessments"
        image={"/assets/gif.jpg"}
      />
      <Header
        first="Bio Risk"
        middle="Biological Risk Assessments"
        last="Ensuring Safety and Compliance"
      />
      <div style={{ padding: "0rem 2rem", paddingBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridAutoRows: "450px",
            gap: "2rem",
          }}
        >
          <div style={{ position: "relative" }}>
            <Image src={nn} alt="bio" layout="fill" objectFit="cover" />

            <p style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
              Risk assessment training, ECOWAS supported by WAHO
            </p>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ lineHeight: "2rem", color: "rgb(130, 129, 129)" }}>
              In the wake of global emerging and re-emerging diseases like
              Ebola, Marburg, and more recently SARS-CoV-2 among others, it’s
              imperative to set up systems which are able to detect and avert
              any hazards or threats arising from such work which involves these
              biological agents and their toxins. Throughout our Organization’s
              work, we promote the One Health approach, recognizing the
              interdependence of animal, human and environmental health. Our
              biorisk management strategies are based on guidance provided
              through the WHO Biosafety manual 4th edition and the OIE. We
              utilize guidelines from ISO 31010:2019- Risk Assessment techniques
              and ISO 31000:2018- Risk Management guidelines to conduct our
              assessments and set up effective mitigation measures.{" "}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div style={{ padding: "0rem 2rem", paddingBottom: "4rem" }}>
        <Mission />
      </div>
      <Utility />
    </motion.div>
  );
};

export default BioRisk;
