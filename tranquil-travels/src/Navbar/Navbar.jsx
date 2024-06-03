import styles from './Navbar.module.css'
import {openModal} from '../scripts/modals.js'
import { UserAuth } from '../Context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const {user, logOut} = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {

        try {
            await logOut();
            navigate('/');
            console.log("You are logged out!");
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <nav className={styles.navbar}>
            <img className={styles.logo} src="/logo.svg" alt="Page Logo"></img>
            <ul className={styles.navLinks}>
                <li><a className={`hover ${styles.navLink}`} href="/home">Home</a></li>
                <li><a className={`hover ${styles.navLink}`} href="#">Find offers</a></li>
                <li><a className={`hover ${styles.navLink}`} href="/add-offers">Add new offers</a></li>
                <li><a className={`hover ${styles.navLink}`} href="/">My offers</a></li>
                <li><a className={`hover ${styles.navLink}`} href="#">Favorites</a></li>
                {user? (
                    <button className="button primary" onClick={handleLogOut}>Log Out</button>
                ) : (
                    <button className="button primary" onClick={() => openModal('login-modal')}> Log in</button>)}
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
    );
}

export default Navbar