import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  
  NProgress.configure({showSpinner: false})
  
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return (
    <div>
    <Head>
        <meta charset="UTF-8" />
        <meta
          name="keyword"
          content="Hitex Consortium, Bio Safety, Bio Waste Management, Bio Security, Hitex, Consortium, Bio Consultancy,Biosafety Cabinet Certification, Total Quality management"
        />
        <meta name="author" content="Paul" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
