import Servicestyles from '../styles/Contact.module.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Services from '../components/Services';
import Mini from '../components/Mini';

const services = () => {
  return (
    <div>
      <Mini head={'Our Services'} sub="Services" />
      <Services />
    </div>
  );
};

export default services;
