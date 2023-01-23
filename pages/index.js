import Head from 'next/head';
import Banner1 from '../components/Ban';
import Faq from '../components/Faq';
import Hero1 from '../components/Hero1';
import Top from '../components/Top';
import Utility from '../components/Utility';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hitex Diagnostic Limited</title>
        <meta name="description" content="Hitex Consortium" />
        <meta
          name="keyword"
          content="Hitex Consortium, Bio Safety, Bio Waste Management, Bio Security, Hitex, Consortium, Bio Consultancy,Biosafety Cabinet Certification, Total Quality management"
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
        <Banner1 />
        <Utility />
        <Faq />
      </main>
    </div>
  );
}

//namecheaptxt=v=spf1 include:spf.efwd.registrar-servers.com ~all
