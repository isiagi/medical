import Servicestyles from '../styles/Contact.module.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Services from '../components/Services';
import Mini from '../components/Mini';
import Faq from '../components/He';

const services = () => {
  return (
    <div>
      <Mini head={'Our Services'} sub="Services" />
      <Services />
      <Faq />
    </div>
  );
};

export default services;
