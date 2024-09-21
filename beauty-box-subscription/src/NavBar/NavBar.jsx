import {useState, useRef} from 'react'
import styles from './NavBar.module.css'



function NavBar(){
    const navRef = useRef();
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    }

    const removeActive = () => {
        setIsActive(false);
    }

    return(

        <>
        <div>
            <header>
                <nav className={styles.navbar}>
                    <a href="#home" className={styles.logo}>Gentle Box</a>

                    <ul className={`${styles.navMenu}  ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}><a href="#About" className={styles.navLink}>About</a></li>
                        <li onClick={removeActive}><a href="#Pricing" className={styles.navLink}>Pricing</a></li>
                        <li onClick={removeActive}><a href="#Shop" className={styles.navLink}>Shop</a></li>
                    </ul>

                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </div>
                </nav>

            </header>
        </div>
         

        </>
    );

}

export default NavBar