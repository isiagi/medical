import Servicestyles from "../styles/Contact.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Services from "../components/Services";
import Mini from "../components/Mini";
import Faq from "../components/He";
import Head from "next/head";
import { motion } from "framer-motion";

const services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Head>
        <title>Hitex Services </title>
      </Head>
      <Mini head={"Our Services"} sub="Services" image={"/assets/qua.jpg"} />
      <Services />
      <Faq />
    </motion.div>
  );
};

export default services;
