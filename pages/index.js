import Head from "next/head";
import Banner1 from "../components/Ban";
import Hero1 from "../components/Hero1";
import Services from "../components/Services";
import Top from "../components/Top";
import Utility from "../components/Utility";
import styles from "../styles/Home.module.css";
import He from "../components/He";
import Who from "../components/Who";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className={styles.container}
    >
      <Head>
        <title>Hitex Diagnostic Limited</title>
        <meta name="description" content="Hitex Consortium" />
        <meta
          name="keywords"
          content="Hitex Consortium, Biosafety, Bio Waste Management, Biosecurity, Hitex, Consortium, Bio Consultancy,Biosafety Cabinet Certification, Total Quality management,Total Quality Management, TQM, Quality Assurance, Continuous Improvement, Customer Satisfaction, Quality Control, Quality Management Systems,
Biological Risk Assessments, Biohazard Assessment, Biological Hazard Evaluation, Risk Management, Biosafety Protocols,
Biorisk Management, Biosafety, Biosecurity, Consultancy Services, Biological Risk Assessment, Biorisk Mitigation,
Contact Hitex, Hitex Contact Information, Contact Us, Hitex Support, Customer Service, Hitex Location"
        />

        <meta
          name="google-site-verification"
          content="NZOf3dXTf97AlYUpgr_SRvp5_IkWZrroB9oYGmBlPuo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <Top />
        <Hero1 />
        <Who />
        {/* <Banner1 /> */}
        <Utility />
        <Services />
        <He />
      </main>
    </motion.div>
  );
}

//namecheaptxt=v=spf1 include:spf.efwd.registrar-servers.com ~all
