import Link from 'next/link'
import {IoLogoWhatsapp} from 'react-icons/io'
import styles from '../styles/Home.module.css'


const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
               <h1>LOGO</h1> 
            </div>
            <div className={styles.nav__items}>
                <ul>
                    <li ><Link href='/'><a>HOME</a></Link></li>
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