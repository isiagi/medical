import Head from "next/head"
import NavBar from "./Nav"
import Footer from './footer/index'

const Layout = ({children}) => (
    <>
        <Head>
        <title>Hitex Diagnostic</title>
        <meta name="description" content="Hitex Diagnostic" />
        </Head>
        <div >
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </>
)

export default Layout