import Servicestyles from '../styles/Contact.module.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Services from '../components/Services';
import Mini from '../components/Mini';
import Faq from '../components/He';
import Head from 'next/head';

const services = () => {
  return (
    <div>
    <Head>
      <title>Hitex Services </title>
    </Head>
      <Mini head={'Our Services'} sub="Services" />
      <Services />
      <Faq />
    </div>
  );
};

export default services;
