import styles from './Navbar.module.css'


function Navbar() {

    return(
        <nav className={styles.navbar}>
            <img className={styles.logo} src="/logo.svg" alt="Page Logo"></img>
            <ul className={styles.navLinks}>
                <li><a className={`hover ${styles.navLink}`} href="#">Home</a></li>
                <li><a className={`hover ${styles.navLink}`} href="#">Find offers</a></li>
                <li><a className={`hover ${styles.navLink}`} href="#">Add new offers</a></li>
                <li><a className={`hover ${styles.navLink}`} href="#">My offers</a></li>
                <li><a className={`hover ${styles.navLink}`} href="#">Favorites</a></li>
                <button className="button primary"> Log in</button>
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
    );
}

export default Navbar