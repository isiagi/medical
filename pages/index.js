import Head from 'next/head';
import Image from 'next/image';
import About from './Ab';
import Banner1 from '../components/Ban';
import Contact from '../components/Contact';
import Depart from '../components/Depart';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hero1 from '../components/Hero1';
import NavBar from '../components/Nav';
import Services from '../components/Services';
import Top from '../components/Top';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hitex Diagnostic Limited</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
      <Top />
        <Hero1 />
        <Banner1 />
        {/* <About /> */}
        {/* <Depart /> */}
        <Services />
        <Contact />
        <Faq />
      </main>
    </div>
  );
}
