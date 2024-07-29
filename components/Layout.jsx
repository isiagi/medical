/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import NavBar from "./Nav";
import Footer from "./footer/index";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Hitex Diagnostic</title>
      <meta name="description" content="Hitex Diagnostic" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <div>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  </>
);

export default Layout;
