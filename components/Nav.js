import Link from 'next/link'
import React from 'react';
import {IoLogoWhatsapp} from 'react-icons/io'
import styles from '../styles/Home.module.css'


const NavBar = () => {
    const [offSet, setOffset] = React.useState(0);

    React.useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }, []);
    return (
        <nav className={offSet > 40 ? styles.nav1 : styles.nav}>
            <div className={styles.nav__logo}>
               <h1>LOGO</h1> 
            </div>
            <div className={styles.nav__items}>
                <ul>
                    <li ><Link href='/'>HOME</Link></li>
                    <li><Link href='/#about'>ABOUT US</Link></li>
                    <li><Link href='/#services'>SERVICES</Link></li>
                    <li>TESTIMONIALS</li>
                    <li><Link href='#contact'>CONTACT</Link></li>
                    <li><a href='/#'><IoLogoWhatsapp style={{fontSize: '25px', color: 'rgb(28, 28, 143)'}}/> +256701844459</a></li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar