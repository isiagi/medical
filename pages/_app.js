import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });

const handleRouteChangeStart = () => {
  NProgress.start();
};

const handleRouteChangeComplete = () => {
  NProgress.done();
};

const handleRouteChangeError = () => {
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

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
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;
