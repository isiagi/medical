import styles from '../styles/Home.module.css'


const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
               <h1>HITEX CONSORTIUM</h1> 
            </div>
            <div className={styles.nav__items}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>DEPARTMENTS</li>
                    <li>SPECIALISTS</li>
                    <li>TESTIMONIALS</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar